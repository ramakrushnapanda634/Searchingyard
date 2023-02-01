
var { Schema, model } = require("mongoose");

var ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: String, required: true },
});

module.exports = new model("Product", ProductSchema);
