const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false
  },
  recipeJson: {
    type: Object,
    required: true,
    unique: true
  }
});


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
