const mongoose = require("mongoose");

const recipeCacheSchema = new mongoose.Schema({
    key: String,
    data: [Object],
});

const RecipeCache = mongoose.model("RecipeCache", recipeCacheSchema);

module.exports = RecipeCache;
