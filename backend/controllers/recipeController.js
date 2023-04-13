const API = require("../API");

module.exports.searchRecipeByIngredients = async (req, res) => {
    const ingredientsList = req.query.ingredients;

    //verify ingredients exist
    if (!ingredientsList) {
        res.status(400).json({ error: "no ingredients" });
        return;
    }

    //get data from api
    try {
        let ingredientsListApi = encodeURIComponent(
            ingredientsList.replace(/,/g, ",+")
        );
        const recipes = await API.searchRecipeByIngredients(ingredientsListApi);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({
            message: "recipe search by ingredient error",
            err: error,
        });
    }
};
