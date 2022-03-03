const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
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

app.get("/products/new", (req, res) => {
  res.render("new");
});

app.post("/products", async (req, res) => {
  const { name, price } = req.body;

  await Product.create({ name, price });

  res.redirect("/products");
});

app.get("/products/:productid", async (req, res) => {
  const { productid } = req.params;

  const product = await Product.findById(productid);

  res.render("show", { product });
});

app.get("/products/:productid/edit", async (req, res) => {
  const { productid } = req.params;

  const product = await Product.findById(productid);

  res.render("edit", { product });
});

app.patch("/products/:productid", async (req, res) => {
  const { productid } = req.params;

  const { name, price } = req.body;

  await Product.findByIdAndUpdate(productid, { name, price });

  res.redirect("/products");
});

app.delete("/products/:productid", async (req, res) => {
  const { productid } = req.params;

  await Product.findByIdAndDelete(productid);

  res.redirect("/products");
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
