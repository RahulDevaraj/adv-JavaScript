const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  imageURL: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    require: true,
  },
  cuisineType: {
    type: String,
  },
  siteURL: {
    type: String,
    require: true,
  },
  numberOfIngredients: {
    type: Number,
    min: 1,
    max: 10,
    require: true,
  },
});

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;
