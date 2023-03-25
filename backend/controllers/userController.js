const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel.js');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const bcrypt = require('bcrypt');
const saltRounds = 12; // you can adjust this value as needed

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ username, email, password: encryptedPassword });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'User Doesnt Exist' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ username: username, password: password }, process.env.JWT_SECRET);
    res.status(200).json({ message: 'Login successful', token });
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
    return openai.createCompletion({
      model: "text-davinci-003",
      prompt: gptString,
      temperature: 0.7,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then(response => {
      
      const mealPlan = JSON.parse(response.data.choices[0].text);
      //console.log(response.data.choices[0].text)
      return mealPlan;
    });

  } catch (error) {
    console.error('Error:', error);
    return 'Error getting meal plan';
  }
}

module.exports = {
    createUser,
    login,
    getMealPlanner
}