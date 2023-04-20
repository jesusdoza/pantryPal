const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const Recipe = require("../models/recipeModel.js");

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const bcrypt = require("bcrypt");
const saltRounds = 12; // you can adjust this value as needed

///METHODS
///================================================
//todo update password, email, caloricPref, dietPref
async function updatePassword(req, res) {
    const token = req.cookies;
    const decoded = jwt.decode(token, process.env.JWT_SECRET);

    console.log("update password function");
    // const { oldPassword, newPassword } = req.body;

    // try {
    //     let foundUser = await User.findOne({ _id: id });

    //     if (!foundUser) {
    //         res.status(400).json({ passwordUpdate: false });
    //     }

    //     //check if old password is correct
    //     const isPasswordValid = await bcrypt.compare(
    //         oldPassword,
    //         foundUser.password
    //     );

    //     //update password
    //     if (isPasswordValid) {
    //         const encryptedPassword = await bcrypt.hash(
    //             newPassword,
    //             saltRounds
    //         );
    //         foundUser.password = encryptedPassword;
    //         await foundUser.save();
    //     }

    //     res.status(200).json({ passwordUpdate: true });
    // } catch (err) {
    //     res.status(400).json({ passwordUpdate: false, error: err.message });
    // }
}

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const encryptedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({
            username,
            email,
            password: encryptedPassword,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        if (error.code === 11000) {
            res.status(401).json({ message: "Username already exists" });
        } else {
            res.status(400).json({ message: error.message });
        }
    }
};

//todo update token to carry user ID
const login = async (req, res) => {
    console.log("login router");
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "User Doesnt Exist" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res
                .status(401)
                .json({ message: "Invalid username or password" });
        }
        const token = jwt.sign(
            { username: username, password: password, id: user._id },
            process.env.JWT_SECRET
        );
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

async function getMealPlanner(numberOfDays, dietType, dailyCalories) {
    const gptString = `I need a meal plan for a ${dietType} diet with a goal of ${dailyCalories} calories per day, for ${numberOfDays} days. Please provide a detailed meal plan with breakfast, lunch, dinner, and two snacks per day. Include the meal items and their respective calorie counts. Ensure that the total calories for each day are close to the daily calorie goal. Format the response as JSON, like this:

[
  {
    "Day": 1,
    "Breakfast": {
      "Meal": "",
      "Calories": 0
    },
    "Lunch": {
      "Meal": "",
      "Calories": 0
    },
    "Snack1": {
      "Meal": "",
      "Calories": 0
    },
    "Dinner": {
      "Meal": "",
      "Calories": 0
    },
    "Snack2": {
      "Meal": "",
      "Calories": 0
    },
    "TotalCalories": ${dailyCalories}
  }
]

Please note that the "TotalCalories" field should be close to the daily calorie goal for each day.
`;
    //console.log(gptString)
    try {
        return openai
            .createCompletion({
                model: "text-davinci-003",
                prompt: gptString,
                temperature: 0.7,
                max_tokens: 3000,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            })
            .then((response) => {
                const mealPlan = JSON.parse(response.data.choices[0].text);
                //console.log(response.data.choices[0].text)
                return mealPlan;
            });
    } catch (error) {
        console.error("Error:", error);
        return "Error getting meal plan";
    }
}

const saveRecipe = async (req, res) => {
    const { recipe, username } = req.body;

    try {
        const existingRecipe = await Recipe.findOne({ recipeJson: recipe });

        if (existingRecipe) {
            // If the recipe exists and the username is not already included, append the username
            if (!existingRecipe.username.includes(username)) {
                existingRecipe.username =
                    existingRecipe.username + ", " + username;
                await existingRecipe.save();
            }
        } else {
            // If the recipe does not exist, create a new one with the provided username and recipeJson
            const newRecipe = new Recipe({
                username,
                recipeJson: recipe,
            });

            await newRecipe.save();
        }

        res.status(200).json({ message: "Recipe saved successfully!" });
    } catch (error) {
        console.error("Error saving the recipe:", error);
        res.status(500).json({ message: "Failed to save the recipe." });
    }
};

const getSavedRecipes = async (req, res) => {
    const { username } = req.body;

    try {
        const savedRecipes = await Recipe.find({
            username: {
                $regex: new RegExp(`\\b${username}\\b`, "i"),
            },
        });

        res.status(200).json(savedRecipes);
    } catch (error) {
        console.error("Error retrieving saved recipes:", error);
        res.status(500).json({ message: "Failed to retrieve saved recipes." });
    }
};

const deleteRecipe = async (req, res) => {
    const { recipe, username } = req.body;

    try {
        const existingRecipe = await Recipe.findOne({ recipeJson: recipe });

        if (existingRecipe) {
            const userArray = existingRecipe.username.split(", ");

            if (userArray.length === 1 && userArray[0] === username) {
                // If the username is the only one associated with the recipe, delete the recipe
                await Recipe.deleteOne({ _id: existingRecipe._id });
            } else {
                // If there are multiple usernames, remove the current username and update the recipe
                const updatedUserArray = userArray.filter(
                    (user) => user !== username
                );
                existingRecipe.username = updatedUserArray.join(", ");
                await existingRecipe.save();
            }

            res.status(200).json({ message: "Recipe deleted successfully!" });
        } else {
            res.status(404).json({ message: "Recipe not found." });
        }
    } catch (error) {
        console.error("Error deleting the recipe:", error);
        res.status(500).json({ message: "Failed to delete the recipe." });
    }
};

module.exports = {
    createUser,
    login,
    getMealPlanner,
    saveRecipe,
    getSavedRecipes,
    deleteRecipe,
};
