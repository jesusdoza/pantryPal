const API = require("../services/spoonacular");
const CacheService = require("../services/cacheService");
const recipeCache = require("../models/recipeCacheModel");
const recipeByIngredientCache = new CacheService(recipeCache);
const combineRecipeData = require("../utilities/combinedRecipeData");

const getRecipesByIngredient = async (req, res) => {
    // console.log("req.query.ingredients", req.query.ingredients);
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
    let recipes = await recipeByIngredientCache.get(ingredientsListApiFormat);

    if (recipes) {
        console.log(`recipeByIngredientCache for found`);
        res.status(200).json(recipes);
        return;
    }

    //data not cached query apiService
    try {
        console.log(`fetching from api for`);
        recipes = await API.searchRecipeByIngredients(ingredientsListApiFormat);
        // console.log(`caching for ${ingredientsListApiFormat}`);

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

const getRecipesByIngredientData = async (req, res) => {
    // console.log("req.query.ingredients", req.query.ingredients);
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
    let recipes = await recipeByIngredientCache.get(ingredientsListApiFormat);

    //cache had values
    if (recipes) {
        console.log(`recipeByIngredientCache for found`);
        res.status(200).json(recipes);
        return;
    }

    //query apiService and cache
    try {
        console.log(`fetching from api for`);

        recipes = await API.searchRecipeByIngredients(ingredientsListApiFormat);

        let recipeIdList = recipes.map((recipe) => recipe.id);

        //todo get recipe instructions api
        const recipeInstruct = await API.getRecipeInstructions(recipeIdList);

        //add to cache

        combineRecipeData(recipes, recipeInstruct);

        recipeByIngredientCache.set(ingredientsListApiFormat, recipes);

        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({
            message: "recipe search by ingredient error",
            err: error,
        });
    }
};

module.exports = {
    getRecipesByIngredient,
    getRecipeInformation,
    getRelatedRecipe,
};
