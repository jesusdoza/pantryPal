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
    const [error, setError] = useState(false);

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

            //combining both api calls data
            let combined = CombinedRecipeData(
                result.data,
                recipeInstructions.data
            );
            setRecipeList(combined);
        } catch (err) {
            console.log(err);
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
                <span>Filter</span>
                <form action="">
                    <label htmlFor=""></label>
                </form>
            </div>

            <div className="searchResults">
                {recipeList.length > 0 ? (
                    recipeList.map((recipe) => (
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

function filterRecipes({ recipeListArr }) {
    let dietOptions = new Set();
    let otherOptions = [
        "cheap",
        "dairyFree",
        "glutenFree",
        "vegan",
        "vegetarian",
        "veryPopular",
        "veryHealthy",
    ];
    let otherOptionsAvailable = new Set();

    //check recipe list filters
    recipeListArr.forEach((recipe) => {
        //add diets to set
        let dietStr = recipe.diets[0].split(" ");
        dietStr.forEach((categoryStr) => {
            dietOptions.add(categoryStr);
        });

        //add other options to set
        otherOptions.forEach((item) => {
            if (recipe[item]) otherOptionsAvailable.add(item);
        });
    });

    let dietOptionsArr = Array.from(dietOptions.values());
    let otherOptionsAvailableArr = Array.from(otherOptionsAvailable.values());
    return (
        <>
            <h2>Dietary options</h2>
            <section>
                {dietOptionsArr.length > 0 ? (
                    <ul>
                        {dietOptionsArr.map((item, index) => {
                            return (
                                <li key={index + item}>
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
                <ul>{otherOptionsAvailableArr}</ul>
            </section>
        </>
    );
}
