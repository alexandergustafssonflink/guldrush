const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
require("dotenv/config");
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

app.use(bodyParser.json());

const productRoute = require("./routes/products");

app.use("/products", productRoute);

app.get("/", (req, res) => {
  res.send("We are HOME!");
});

app.listen(3000);
