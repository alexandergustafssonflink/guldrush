const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    price: Number,
    url: String,
    name: String,
    weight: Number,
    metal: String,
    product: String,
    company: String,
    date: Date,
  },
  {
    collection: "prices",
  }
);

module.exports = mongoose.model("Products", ProductSchema);
