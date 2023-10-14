let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: { type: String },
  mobile: { type: String },
  email: { type: String },
  address: { type: String },
  password: { type: String },
});

let UserModel = mongoose.model("user", UserSchema, "users");

module.exports = UserModel;
