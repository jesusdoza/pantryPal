const express = require("express");
const { send } = require("process");
const API = require("../../services/spoonacular");
const apiRouter = express.Router();
const profileRouter = require("./profile");
const loginRouter = require("./login");
const signupRouter = require("./signup");

const {
    getMealPlanner,
    saveRecipe,
    getSavedRecipes,
    deleteRecipe,
} = require("../../controllers/userController.js");

apiRouter.use("/signup", signupRouter);
apiRouter.use("/login", loginRouter);
apiRouter.post("/saveRecipe", saveRecipe);
apiRouter.post("/getSavedRecipes", getSavedRecipes);
apiRouter.post("/deleteRecipe", deleteRecipe);
apiRouter.use("/profile", profileRouter);

//test route to localhost:4000/api/
apiRouter.get("/", (req, res) => {
    try {
        res.json({ msg: "test GET request working" });
    } catch (error) {
        res.status(400).json({ error: "something went wrong" });
    }
});

apiRouter.get("/searchbyingredient", async (req, res) => {
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
});

apiRouter.get("/recipeinformation", async (req, res) => {
    const recipeId = req.query.recipeIdList;
    try {
        const recipeInfo = await API.getRecipeInstructions(recipeId);
        res.status(200).json(recipeInfo);
        console.log(recipeInfo);
    } catch (error) {
        res.status(400).json({
            err: error,
        });
    }
});

apiRouter.get("/relatedrecipe", async (req, res) => {
    const recipeId = req.query.recipeData;
    try {
        const relatedRecipe = await API.getSimilarRecipes(recipeId);
        res.status(200).json(relatedRecipe);
    } catch (error) {
        res.status(400).json({
            err: error,
        });
    }
});

apiRouter.post("/getMealPlanner", async (req, res) => {
    try {
        const { numberOfDays, dietType, dailyCalories } = req.body;
        await getMealPlanner(numberOfDays, dietType, dailyCalories).then(
            (mealPlan) => {
                console.log("Meal plan:", mealPlan);
                res.setHeader("Content-Type", "application/json");
                res.json(mealPlan);
            }
        );
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error getting meal plan" });
    }
});

module.exports = apiRouter;
