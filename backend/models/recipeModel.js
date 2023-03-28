const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  image: String,
  title: String,
  summary: String,
  creditText: String,
  dishTypes: [String],
  servings: Number,
  readyInMinutes: Number,
  dietary: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
