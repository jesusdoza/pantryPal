const API = require("../services/spoonacular");
const CacheService = require("../services/cacheService");
const recipeCacheModel = require("../models/recipeCacheModel");
const recipeByIngredientCache = new CacheService(recipeCacheModel, 20);
const combineRecipeData = require("../utilities/combinedRecipeData");

const getRecipesByIngredient = async (req, res) => {
    const ingredientsList = req.query.ingredients;

    //verify ingredients exist
    if (!ingredientsList) {
        res.status(400).json({ error: "no ingredients" });
        return;
    }

    //format ingredient string for api
    let ingredientsListApiFormat = encodeURIComponent(
        ingredientsList.replace(/,/g, ",+")
    );

    //check recipeByIngredientCache
    let recipes = await recipeByIngredientCache.get(
        ingredientsListApiFormat,
        5
    );

    if (recipes) {
        res.status(200).json(recipes);
        return;
    }

    //data not cached query apiService
    try {
        recipes = await API.searchRecipeByIngredients(ingredientsListApiFormat);

        let recipeIdList = recipes.map((recipe) => recipe.id);

        //todo get recipe instructions api
        const recipeInstruct = await API.getRecipeInstructions(recipeIdList);

        //add to cache
        recipeByIngredientCache.set(ingredientsListApiFormat, recipes);

        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({
            message: "recipe search by ingredient error",
            err: error,
        });
    }
};

//todo have single endpoint for recipes
//! REDUNDANT REMOVE AND COMBINE INTO RECIPES BY INGREDIENT SEARCH
const getRecipeInformation = async (req, res) => {
    const recipeIdList = req.query.recipeIdList;
    try {
        const recipeInfo = await API.getRecipeInstructions(recipeIdList);
        res.status(200).json(recipeInfo);
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

const getRecipesByIngredientCombinedData = async (req, res) => {
    const ingredientsList = req.query.ingredients;

    //verify ingredients exist
    if (!ingredientsList) {
        res.status(400).json({ error: "no ingredients" });
        return;
    }

    //format ingredient string for api
    let ingredientsListApiFormat = encodeURIComponent(
        ingredientsList.replace(/,/g, ",+")
    );

    //check Cache
    let recipes = await recipeByIngredientCache.get(ingredientsListApiFormat);

    //cache had values return
    if (recipes) {
        res.status(200).json(recipes.data);
        return;
    }

    //query apiService and cache
    try {
        const recipeData = await getApiData(ingredientsListApiFormat);

        //cache combined data
        recipeByIngredientCache.set(ingredientsListApiFormat, recipeData);
        res.status(200).json(recipeData);
    } catch (error) {
        res.status(400).json({
            message: "recipe search by ingredient error",
            err: error,
        });
    }
};

async function getApiData(ingredientsListApiFormat) {
    //query API for recipes
    let recipesList = await API.searchRecipeByIngredients(
        ingredientsListApiFormat
    );

    //extract IDs from recipes
    let recipeIdList = recipesList.map((recipe) => recipe.id);

    //get instructions for all recipe ids
    const recipeInstructList = await API.getRecipeInstructions(recipeIdList);

    const recipeData = combineRecipeData(recipesList, recipeInstructList);

    return recipeData;
}

module.exports = {
    getRecipesByIngredientCombinedData,
    getRecipesByIngredient,
    getRecipeInformation,
    getRelatedRecipe,
};
