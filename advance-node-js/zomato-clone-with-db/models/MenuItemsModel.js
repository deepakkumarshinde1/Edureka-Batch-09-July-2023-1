let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let MenuItemsSchema = new Schema({
  name: { type: String },
  description: { type: String },
  ingridients: { type: Array },
  restaurantId: { type: Schema.Types.ObjectId },
  image: { type: String },
  qty: { type: Number },
  price: { type: Number },
});

let MenuItemsModel = mongoose.model("menu_item", MenuItemsSchema, "menu_items");

module.exports = MenuItemsModel;
