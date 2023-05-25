const mongoose = require("mongoose");

const recipeCacheSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: false,
    },
    recipeJson: {
        type: Object,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const recipeCache = mongoose.model("Recipe", recipeCacheSchema);

module.exports = recipeCache;
