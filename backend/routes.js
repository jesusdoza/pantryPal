const express = require("express");
const { send } = require("process");
const API = require("./API");
const router = express.Router();
const { createUser, login, getMealPlanner, saveRecipe } = require('./controllers/userController.js');


router.get("/searchbyingredient", async (req, res) => {
    const ingredientsList = req.query.ingredients;

    //verify ingredients exist
    if (!ingredientsList) {
        res.status(400).json({ error: "no ingredients" });
        return;
    }

    //get data from api
    try {
        let ingredientsListApi = encodeURIComponent(ingredientsList.replace(/,/g, ',+'));
        const recipes = await API.searchRecipeByIngredients(ingredientsListApi);
        res.status(200).json(recipes);
    } catch (error) {
        res.status(400).json({
            message: "recipe search by ingredient error",
            err: error,
        });
    }
});

router.get("/recipeinformation", async (req, res) => {
    const recipeId = req.query.recipeIdList;
    try {
        const recipeInfo = await API.getRecipeInstructions(recipeId)
        res.status(200).json(recipeInfo)
        console.log(recipeInfo);
    } catch(error) {
        res.status(400).json({
            err: error,
        });
    }
});

router.get("/relatedrecipe", async (req, res) => {
    const recipeId = req.query.recipeData
    try {
        const relatedRecipe = await API.getSimilarRecipes(recipeId)
        res.status(200).json(relatedRecipe)
    } catch(error) {
        res.status(400).json({
            err: error,
        })
    }
})

router.post('/signup', createUser);

router.post('/login', login);

//test route to localhost:4000/api/
router.get('/', (req, res) => {
    try {
        res.json({msg: 'test GET request working'});
    } catch(error) {
        res.status(400).json({error: 'something went wrong'});
    }
});

router.post('/getMealPlanner', async (req, res) => {
  try {
    const { numberOfDays, dietType, dailyCalories } = req.body;
    await getMealPlanner(numberOfDays, dietType, dailyCalories
        ).then(mealPlan => {
            console.log('Meal plan:', mealPlan);
            res.setHeader('Content-Type', 'application/json');
            res.json(mealPlan);
        });
    

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error getting meal plan' });
  }
});

router.post("/api/save-recipe", saveRecipe);

module.exports = router;