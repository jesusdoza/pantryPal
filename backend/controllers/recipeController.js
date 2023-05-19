const API = require("../services/spoonacular");
const cache = require("../services/cacheService");

const getRecipesByIngredient = async (req, res) => {
    const ingredientsList = req.query.ingredients;

    //verify ingredients exist
    if (!ingredientsList) {
        res.status(400).json({ error: "no ingredients" });
        return;
    }

    let ingredientsListApiFormat = encodeURIComponent(
        ingredientsList.replace(/,/g, ",+")
    );

    //check cache
    let recipes = cache.get(ingredientsListApiFormat);
    if (recipes) {
        console.log(`cache for found`);
        res.status(200).json(recipes);
        return;
    }

    //get data from api
    try {
        // console.log(`fetching from api for`);
        recipes = await API.searchRecipeByIngredients(ingredientsListApiFormat);
        // console.log(`caching for ${ingredientsListApiFormat}`);
        cache.set(ingredientsListApiFormat, recipes);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({
            message: "recipe search by ingredient error",
            err: error,
        });
    }
};

const getRecipeInformation = async (req, res) => {
    const recipeId = req.query.recipeIdList;
    try {
        const recipeInfo = await API.getRecipeInstructions(recipeId);
        res.status(200).json(recipeInfo);
        // console.log(recipeInfo);
    } catch (error) {
        res.status(400).json({
            err: error,
        });
    }
};

const getRelatedRecipe = async (req, res) => {
    const recipeId = req.query.recipeData;
    try {
        const relatedRecipe = await API.getSimilarRecipes(recipeId);
        res.status(200).json(relatedRecipe);
    } catch (error) {
        res.status(400).json({
            err: error,
        });
    }
};

module.exports = {
    getRecipesByIngredient,
    getRecipeInformation,
    getRelatedRecipe,
};
