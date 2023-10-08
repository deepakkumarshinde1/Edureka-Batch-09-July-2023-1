let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let LocationSchema = new Schema({
  name: { type: String },
  city_id: { type: Number },
  location_id: { type: Number },
  city: { type: String },
  country_name: { type: String },
});

let LocationModel = mongoose.model("location", LocationSchema, "locations");

module.exports = LocationModel;
