let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let MealTypeSchema = new Schema({
  name: { type: String },
  content: { type: String },
  image: { type: String },
  meal_type: { type: Number },
});

let MealTypeModel = mongoose.model("meal_type", MealTypeSchema, "meal_types");

module.exports = MealTypeModel;
