import React, { useRef, useState, useEffect } from "react";
import { StyledRecipeSearch } from "./RecipeSearch.styles";
import axios from "axios";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import SearchSpinner from "../../components/SearchSpinner/SearchSpinner";
import { CombinedRecipeData } from "./CombinedRecipeData";

import searchSample from "../../recipeSearchSample";
import bulkSample from "../../recipeBulkInfoSample";

export default function RecipeSearch() {
    // State for Ingredient

    const [ingredients, setIngredients] = useState("");
    const [recipeList, setRecipeList] = useState([]);
    const [filteredRecipeList, setFilteredRecipeList] = useState([]);
    const [dietFilter, setDietFilter] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);

    const [error, setError] = useState(false);
    const [searchSpinner, setSearchSpinner] = useState(false);

    //FILTER RESULTS
    useEffect(() => {
        if (dietFilter.length > 0 || categoryFilter.length > 0) {
            let filtered = applyFilter(recipeList, dietFilter, categoryFilter);
            setFilteredRecipeList(filtered);
            return;
        }

        setFilteredRecipeList(recipeList);
    }, [dietFilter, categoryFilter]);

    // List of Ingredients
    const ingredientRef = useRef("");

    async function handleSubmit() {
        try {
            setSearchSpinner(true);
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
            setSearchSpinner(false);
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
                    onSubmit={(event) => {
                        event.preventDefault();
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
            <section className="recipes-display">
                <div className="filter">
                    <FilterList
                        recipeListArr={filteredRecipeList}
                        setDietFilter={setDietFilter}
                        dietFilter={dietFilter}
                        setCategoryFilter={setCategoryFilter}
                        categoryFilter={categoryFilter}
                    />
                </div>
                <section className="searchresults-container">
                    <div className="searchResults">
                        <ul>
                            {searchSpinner ? (
                                <SearchSpinner />
                            ) : filteredRecipeList.length > 0 ? (
                                filteredRecipeList.map((recipe) => (
                                    <li key={recipe.id}>
                                        <RecipeCard
                                            key={recipe.id}
                                            recipe={recipe}
                                        />
                                    </li>
                                ))
                            ) : error ? (
                                <h3>
                                    {" "}
                                    An error has occured, please try searching
                                    again.{" "}
                                </h3>
                            ) : (
                                <h3>
                                    {" "}
                                    Search for Ingredients to show Recipe
                                    Results.{" "}
                                </h3>
                            )}
                        </ul>
                    </div>
                </section>
            </section>
        </StyledRecipeSearch>
    );
}

/// APPLY FILTER *****************************************
function applyFilter(recipeListArr, recipeFilters, categoryFilters) {
    let filteredList = recipeListArr;

    //no filters at all or recipe filters array is empty
    if (
        (!recipeFilters && !categoryFilters) ||
        (recipeFilters.length <= 0 && categoryFilters.length <= 0)
    ) {
        return recipeListArr;
    }

    //process recipes through diets filters
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
            return true;
        });
    }

    //process recipes through categories by checking recipe specific boolean properties
    // and update filteredList
    if (categoryFilters.length > 0) {
        filteredList = filteredList.filter((recipe) => {
            for (let i = 0; i < categoryFilters.length; i++) {
                if (!recipe[categoryFilters[i]]) {
                    return false;
                }
            }
            return true;
        });
    }

    return filteredList;
}

//=====================================
//FILTER COMPONENT
//
function FilterList({
    recipeListArr,
    setDietFilter,
    dietFilter,
    setCategoryFilter,
    categoryFilter,
}) {
    //todo props what filters do i display extract that to its own funciton
    if (!recipeListArr) {
        return <div>no filters available</div>;
    }
    let dietOptions = new Set();
    let otherOptionsAvailable = new Set();

    let otherOptions = [
        "cheap",
        "veryPopular",
        "veryHealthy",
        "sustainable",
        "lowFodmap",
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
            //already in the filter remove it
            if (state.includes(str)) {
                return state.filter((category) => category !== str);
            }
            //add to filter
            return [...state, str];
        });
    }
    function removeDietFilter(str) {
        setDietFilter((state) => {
            return state.filter((category) => category !== str);
        });
    }
    function addCategoryFilter(str) {
        setCategoryFilter((state) => {
            if (state.includes(str)) {
                return state.filter((category) => category !== str);
            }
            return [...state, str];
        });
    }
    function removeCategoryFilter(str) {
        setCategoryFilter((state) => {
            return state.filter((category) => category !== str);
        });
    }

    return (
        <>
            {dietFilter.length > 0 ? (
                <section>
                    <h2>selected filters: </h2>
                    <ul>
                        {dietFilter.map((item, index) => {
                            return (
                                <li
                                    key={index + item}
                                    onClick={() => {
                                        removeDietFilter(item);
                                    }}
                                    className="btn-filter">
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </section>
            ) : (
                <section></section>
            )}

            {categoryFilter.length > 0 ? (
                <section>
                    <h2>Category filters</h2>
                    {categoryFilter.map((category, index) => {
                        return (
                            <li
                                key={index + category}
                                onClick={() => {
                                    removeCategoryFilter(category);
                                }}
                                className="btn-filter">
                                {category}
                            </li>
                        );
                    })}
                </section>
            ) : (
                <section></section>
            )}
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
                <h2>Categories</h2>
                <ul className="filter-options">
                    {otherOptionsAvailableArr.map((option, index) => {
                        return (
                            <li
                                onClick={() => {
                                    addCategoryFilter(option);
                                }}
                                key={option + index + 2}
                                className="btn">
                                <span>{option}</span>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}
