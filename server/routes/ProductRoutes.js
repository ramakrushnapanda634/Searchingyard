const express = require("express");
const router = express.Router();
const Product = require("../model/ProductModel");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    rating: req.body.rating,
  });
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const removedProduct = await Product.remove({ _id: req.params.productId });
    res.json(removedProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      { $set: { name: req.body.name } }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
