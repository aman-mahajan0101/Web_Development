const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
// const Product = require("./models/product");
const seedProducts = require("./seed");

app.set("view engine", ejs);
app.set("views", path.join(__dirname, "views"));
