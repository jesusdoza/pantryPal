const mongoose = require("mongoose");

const recipeCacheSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    data: [Object],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const RecipeCache = mongoose.model("RecipeCache", recipeCacheSchema);

module.exports = RecipeCache;
