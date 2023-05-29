const mongoose = require("mongoose");

const recipeCacheSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    data: [Object],
});

const RecipeCache = mongoose.model("RecipeCache", recipeCacheSchema);

module.exports = RecipeCache;
