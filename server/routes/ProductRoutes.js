const express = require("express");
const router = express.Router();
const ProductModel = require("../model/ProductModel");

router.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:productId", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const product = new ProductModel({
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
router.put("/:productId", async (req, res) => {
  var product = await ProductModel.findById(req.params.id);
  if (!product) {
    res.status(201).json({ Scccess: true, Mssage: "Product Not Found" });
  }
  product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });
  res.status(200).json({ Scccess: true, product });
});
router.delete("/:productId", async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  if (!product) {
    res.status(201).json({ Scccess: true, Mssage: "Product Not Found" });
  }
  await product.remove();
  res
    .status(200)
    .json({ Scccess: true, Message: "Product Removed Successfully" });
});



module.exports = router;
