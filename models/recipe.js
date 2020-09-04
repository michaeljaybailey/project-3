const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  dish: { type: String, required: true },
  ingredients: { type: String, required: true },
  synopsis: String,
  recipeType: { type: String, required:true },
  date: { type: Date, default: Date.now }
});

//recipeType will denote whether it is a user added recipe or another user's reciped

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
