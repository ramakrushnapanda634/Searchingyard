
var { Schema, model } = require("mongoose");

var ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  
});
const ProductModel= new model("Product", ProductSchema);
module.exports =ProductModel;
