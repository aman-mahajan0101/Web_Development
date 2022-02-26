const { executionAsyncResource } = require("async_hooks");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const { parse } = require("url");
const Product = require("./models/product");
const seedProducts = require("./seed");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost/shop-app")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));

//seedProducts();

app.get("/products", async (req, res) => {
  const products = await Product.find({});

  res.render("index", { products });
});

app.get("/add_products", async (req, res) => {
  res.render("add_products");
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
