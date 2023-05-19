import React, { useRef, useState, useEffect } from "react";
import { StyledRecipeSearch } from "./RecipeSearch.styles";
import axios from "axios";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import SearchSpinner from "../../components/SearchSpinner/SearchSpinner";
import { CombinedRecipeData } from "./CombinedRecipeData";
import { FilterList } from "../../components/FilterList/FilterList";

import searchSample from "../../recipeSearchSample";
import bulkSample from "../../recipeBulkInfoSample";

export default function RecipeSearch() {
    // State for Ingredient
    const API_URL = import.meta.env.VITE_API_IP;

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
                `${API_URL}/api/searchbyingredient`,
                {
                    params: {
                        ingredients: ingredients,
                    },
                }
            );

            if (result?.data) {
                setError(false);
            }

            //used for bulk info api call
            const recipeIdList = result.data.map((recipe) => recipe.id);

            const recipeInstructions = await axios.get(
                `${API_URL}/api/recipeinformation`,
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
            <div className="searchContainer">
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
                        placeholder="Enter your ingredients"
                        className="search"
                    />
                    <button className="search-btn">Search</button>
                </form>
            </div>

            <section className="recipes-display">
                <div className="filter-container">
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
                                <h3 className="searchPrompt">
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
