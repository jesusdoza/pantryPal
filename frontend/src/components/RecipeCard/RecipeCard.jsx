import { Card } from "./RecipeCard.styles.js";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext } from "react";
import { userContext } from "../../context/userContext.jsx";

const handleSave = (recipe, username) => {
    console.log("username", username);
    const API_URL = import.meta.env.VITE_API_IP;
    if (!username) {
        alert("Please log in to save the recipe.");
        return;
    }

    fetch(`${API_URL}/api/saveRecipe`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, recipe }),
    })
        .then((response) => {
            if (response.ok) {
                alert("Recipe saved successfully!");
            } else {
                throw new Error("Failed to save the recipe.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Failed to save the recipe.");
        });
};

const handleDelete = (recipe, username) => {
    const API_URL = import.meta.env.VITE_API_IP;

    if (!username) {
        alert("Please log in to delete the recipe.");
        return;
    }

    fetch(`${API_URL}/api/deleteRecipe`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, recipe }),
    })
        .then((response) => {
            if (response.ok) {
                alert("Recipe deleted successfully!");
            } else {
                throw new Error("Failed to delete the recipe.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Failed to delete the recipe.");
        });
};

const RecipeCard = ({ recipe, showDelete }) => {
    const removeHTMLTagsAndFilterText = (str) => {
        const cleanedText = str.replace(/<\/?[^>]+(>|$)/g, "");
        const cleanedText1 = cleanedText.split("If you like this recipe")[0];
        const filteredText = cleanedText1.replace("Credit:", "");
        return filteredText;
    };

    const { isLoggedIn, userProfile } = useContext(userContext);

    return (
        <Card>
            <div className="container">
                <img src={recipe.image} alt={recipe.title} />
                <div className="card_body">
                    <h1>{recipe.title}</h1>
                    <p>
                        {removeHTMLTagsAndFilterText(recipe.summary)}
                        Credit: {recipe.creditText}
                    </p>
                    <div className="card_footer">
                        <div className="card_footer_container">
                            <h2>Dish type:</h2>
                            <p> {recipe.dishTypes[0]}</p>
                        </div>
                        <div className="card_footer_container">
                            <h2>Servings:</h2>
                            <p> {recipe.servings}</p>
                        </div>
                        <div className="card_footer_container">
                            <h2>Total Time:</h2>
                            <p>{recipe.readyInMinutes}</p>
                        </div>
                        {/* <div className="card_footer_container">
              <h2>Source:</h2>
              <p>{recipe.sourceName}</p>
            </div> */}
                    </div>
                    <div className="btn-container">
                        <Link
                            to="/details"
                            state={{ recipe: recipe }}
                            className="try_btn">
                            Try it!
                        </Link>

                        {!showDelete && (
                            <button
                                className="save_btn"
                                onClick={() =>
                                    handleSave(recipe, userProfile.username)
                                }>
                                Save it!
                            </button>
                        )}
                        {showDelete && (
                            <button
                                className="delete_btn"
                                onClick={() =>
                                    handleDelete(recipe, userProfile.username)
                                }>
                                Delete Recipe
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default RecipeCard;
