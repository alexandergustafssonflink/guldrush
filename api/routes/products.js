const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// SUBMITS PRODUCT
router.post("/", async (req, res) => {
  const product = new Product({
    price: req.body.price,
    name: req.body.name,
    collection: "guldrush",
  });
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//GETS ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

router.get("/latest300", async (req, res) => {
  try {
    const products = await Product.find().sort({ date: -1 }).limit(3);
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

// GET SPECIFIC PRODUCT
router.get("/:postId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.postId);
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
