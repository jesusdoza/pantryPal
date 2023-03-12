const express = require("express");
const API = require("./API");
const router = express.Router();
const User = require('./models/userModel.js');
const { createUser,login } = require('./controllers/userController.js');


router.get("/searchbyingredient", async (req, res) => {
    const ingredientsList = req.query.ingredients;
    console.log(req.query);

    //verify ingredients exist
    if (!ingredientsList) {
        res.status(400).json({ error: "no ingredients" });
        return;
    }

    //get data from api
    try {
        let ingredientsListApi = encodeURIComponent(ingredientsList.replace(/,/g, ',+'))
        const recipes = await API.searchRecipeByIngredients(ingredientsListApi);
        res.status(200).json("Good Call")
    } catch (error) {
        res.status(400).json({
            message: "recipe search by ingredient error",
            err: error,
        });
    }
});

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/login', login);
module.exports = router;