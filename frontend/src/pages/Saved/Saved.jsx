import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Cookies from "js-cookie";
import { StyledSavedRecipes } from "./Saved.styles";
import { useContext } from "react";
import { userContext } from "../../context/userContext.jsx";

export default function SavedRecipes() {
    const [savedRecipes, setSavedRecipes] = useState([]);
    const API_URL = import.meta.env.VITE_API_IP;
    const { isLoggedIn, userProfile } = useContext(userContext);

    useEffect(() => {
        async function fetchSavedRecipes() {
            try {
                if (!isLoggedIn) {
                    alert("Please log in to get saved recipes.");
                    return;
                }
                const response = await axios.post(
                    `${API_URL}/api/getSavedRecipes`,
                    { username: userProfile.username }
                );
                setSavedRecipes(response.data);
            } catch (error) {
                console.error("Error fetching saved recipes:", error);
            }
        }

        fetchSavedRecipes();
    }, []);

    return (
        <StyledSavedRecipes>
            <div className="title">
                <h1>Saved Recipes</h1>
            </div>
            <div className="saved-recipes">
                <ul>
                    {savedRecipes.map((recipe) => (
                        <li key={recipe._id}>
                            <RecipeCard
                                recipe={recipe.recipeJson}
                                showDelete={true}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </StyledSavedRecipes>
    );
}
