import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Cookies from "js-cookie";

export default function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    async function fetchSavedRecipes() {
      try {
          const loggedInDataRaw = Cookies.get('loggedIn');
          const loggedInData = loggedInDataRaw ? JSON.parse(loggedInDataRaw) : null;
          const username = loggedInData ? loggedInData.username : null;
          if (!username) {
            alert("Please log in to get saved recipes.");
            return;
          }
        const response = await axios.post("http://localhost:4000/api/getSavedRecipes", { username });
        setSavedRecipes(response.data);
      } catch (error) {
        console.error("Error fetching saved recipes:", error);
      }
    }

    fetchSavedRecipes();
  }, []);

  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeCard recipe={recipe.recipeJson} showDelete={true} />
          </li>
        ))}
      </ul>
    </div>
  );
}
