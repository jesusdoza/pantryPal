const axios = require("axios");
module.exports = {
    searchRecipe: async (req, res) => {
        try {
            const res = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}`
            );
            const data = await res.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    searchRecipeByNutrients: async (req, res) => {
        try {
            const res = await fetch(
                `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.API_KEY}`
            );
            const data = await res.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    },
    searchRecipeByIngredients: async (
        ingredientsListApi,
        numOfResults = 100
    ) => {
        try {
            const results = await axios.get(
                `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsListApi}&number=${numOfResults}&apiKey=${process.env.API_KEY}`
            );
            return results.data;
        } catch (error) {
            return error;
        }
    },
    getRecipeInstructions: async (recipeId) => {
        try {
            const results = await axios.get(
                `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeId}&apiKey=${process.env.API_KEY}`
            );
            return results.data;
        } catch (error) {
            return error;
        }
    },
    getSimilarRecipes: async (recipeId) => {
        try {
            const results = await axios.get(
                `https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=${process.env.API_KEY}`
            );
            return results.data;
        } catch (error) {
            res.status(400).json({
                error: error,
            });
        }
    },
    searchIngredients: async (req, res) => {
        try {
            const res = await fetch(
                `https://api.spoonacular.com/food/ingredients/search?apiKey=${process.env.API_KEY}`
            );
            const data = await res.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json(error);
        }
    },
};
