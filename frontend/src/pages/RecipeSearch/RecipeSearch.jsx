import React, { useRef, useState, useEffect } from "react";
import { StyledRecipeSearch } from "./RecipeSearch.styles";
import axios from "axios";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { CombinedRecipeData } from "./CombinedRecipeData";

import searchSample from "../../recipeSearchSample";
import bulkSample from "../../recipeBulkInfoSample";

export default function RecipeSearch() {
    // State for Ingredient

    const [ingredients, setIngredients] = useState("");
    const [recipeList, setRecipeList] = useState([]);
    const [filteredRecipeList, setFilteredRecipeList] = useState([]);
    const [dietFilter, setDietFilter] = useState([]);

    const [error, setError] = useState(false);

    //FILTER RESULTS
    useEffect(() => {
        if (dietFilter.length > 0) {
            let filtered = applyFilter(recipeList, dietFilter);
            setFilteredRecipeList(filtered);
            return;
        }

        setFilteredRecipeList(recipeList);
    }, [dietFilter]);

    // List of Ingredients
    const ingredientRef = useRef("");

    async function handleSubmit() {
        try {
            const result = await axios.get(
                "http://localhost:4000/api/searchbyingredient",
                {
                    params: {
                        ingredients: ingredients,
                    },
                }
            );

            //!test remove
            // const result = { data: searchSample };
            //!test remove

            if (result?.data) {
                setError(false);
            }

            //used for bulk info api call
            const recipeIdList = result.data.map((recipe) => recipe.id);

            const recipeInstructions = await axios.get(
                "http://localhost:4000/api/recipeinformation",
                {
                    params: {
                        recipeIdList: recipeIdList,
                    },
                }
            );

            //! test remove
            // const recipeInstructions = { data: bulkSample };
            //! test remove
            //combining both api calls data
            let combined = CombinedRecipeData(
                result.data,
                recipeInstructions.data
            );
            setRecipeList(combined);
            setFilteredRecipeList(combined);

            //todo FILTER OPERATION
            ///Filter operation on recipes
            // let filteredRecipes = filterRecipeList(recipeList, dietFilter);
            //todo FILTER OPERATION
        } catch (err) {
            setError(true);
        }
    }

    return (
        <StyledRecipeSearch>
            <div className="title">
                <h1>Recipe Search</h1>
            </div>
            <div className="search">
                <form
                    action="#"
                    onSubmit={() => {
                        handleSubmit();
                    }}>
                    <input
                        ref={ingredientRef}
                        onChange={(event) => setIngredients(event.target.value)}
                        id="ingregients"
                        value={ingredients}
                        type="text"
                        placeholder="What are you in the mood for?"
                    />
                    <button>Search</button>
                </form>
            </div>

            <div>{ingredients}</div>

            <div className="filter">
                <FilterList
                    recipeListArr={recipeList}
                    setDietFilter={setDietFilter}
                    dietFilter={dietFilter}
                />
            </div>

            <div className="searchResults">
                {filteredRecipeList.length > 0 ? (
                    filteredRecipeList.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
                ) : error ? (
                    <h3> An error has occured, please try searching again. </h3>
                ) : (
                    <h3> Search for Ingredients to show Recipe Results. </h3>
                )}
            </div>
        </StyledRecipeSearch>
    );
}

/// APPLY FILTER *****************************************
function applyFilter(recipeListArr, recipeFilters, otherOptions) {
    //filter.diets = string []
    //filter.otherOptions = String []  but will be checked against booleans
    let filteredList = recipeListArr;

    //no filters at all or recipe filters array is empty
    if ((!recipeFilters && !otherOptions) || recipeFilters.length <= 0) {
        return recipeListArr;
    }

    //recipe filters have been added
    if (recipeFilters.length > 0) {
        filteredList = recipeListArr.filter((recipe) => {
            let recipeCategories = recipe.diets;

            // loop through recipe filters
            for (let i = 0; i < recipeFilters.length; i++) {
                let currentFilter = recipeFilters[i];
                // recipe fails to include all filters
                if (!recipeCategories.includes(currentFilter)) {
                    return false;
                }
            }
            //todo check booleans against already filtered list
            return true;
        });
    }
    return filteredList;
}

//=====================================
//FILTER COMPONENT
//
function FilterList({ recipeListArr, setDietFilter, dietFilter }) {
    //todo props what filters do i display extract that to its own funciton
    if (!recipeListArr) {
        return <div>no filters available</div>;
    }
    let dietOptions = new Set();
    let otherOptionsAvailable = new Set();

    let otherOptions = [
        "cheap",
        "dairyFree",
        "glutenFree",
        "vegan",
        "vegetarian",
        "veryPopular",
        "veryHealthy",
    ];

    //check recipe list and add all recipes diets filters the text string one
    recipeListArr.forEach((recipe) => {
        //extract diets from recipe
        let dietArr = recipe.diets;

        if (dietArr.length > 0) {
            dietArr.forEach((categoryStr) => {
                dietOptions.add(categoryStr);
            });
        }

        //extract other options from recipe the BOOLEANs
        otherOptions.forEach((item) => {
            if (recipe[item]) otherOptionsAvailable.add(item);
        });
    });

    //all diet options and other options extracted from recipe list
    let dietOptionsArr = Array.from(dietOptions.values());
    let otherOptionsAvailableArr = Array.from(otherOptionsAvailable.values());

    ///REMOVE OR ADD DIET FILTER
    function addDietFilter(str) {
        setDietFilter((state) => {
            if (state.includes(str)) {
                return state.filter((category) => category !== str);
            }
            return [...state, str];
        });
    }
    function removeFilter(str) {
        setDietFilter((state) => {
            return state.filter((category) => category !== str);
        });
    }
    function addOtherOptionFilter(str) {}

    return (
        <>
            <section>
                <h2>selected filters: </h2>
                <ul>
                    {dietFilter.map((item, index) => {
                        return (
                            <li
                                key={index + item}
                                onClick={() => {
                                    removeFilter(item);
                                }}
                                className="btn-filter">
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section>
                <h2>Dietary options</h2>
                {dietOptionsArr.length > 0 ? (
                    <ul className="filter-options">
                        {dietOptionsArr.map((item, index) => {
                            return (
                                <li
                                    onClick={() => {
                                        addDietFilter(item);
                                    }}
                                    className="btn"
                                    key={index + item + 1}>
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <></>
                )}
            </section>
            <section>
                <h2>other options</h2>
                <ul className="filter-options">
                    {otherOptionsAvailableArr.map((option, index) => {
                        return (
                            <li key={option + index + 2} className="btn">
                                <span>{option}</span>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
