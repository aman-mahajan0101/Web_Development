const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware");
const User = require("../models/user");
const Product = require("../models/product");
const { v4: uuid } = require("uuid");
const request = require("request");
const jsSHA = require("jssha");

router.get("/user/cart", isLoggedIn, async (req, res) => {
  const userid = req.user._id;
  const user = await User.findById(userid).populate("cart.item");

  const totalAmount = user.cart.reduce((currentSum, product) => currentSum + product.item.price * product.qty, 0);

  console.log(user);
  //Code try
  const txnid = uuid();
  const email = user.email;
  const firstname = user.username;
  const productinfo = "iPhone";
  const hashString = process.env.MERCHANT_KEY + "|" + txnid + "|" + totalAmount + "|" + productinfo + "|" + firstname + "|" + email + "|" + "||||||||||" + process.env.MERCHANT_SALT;
  const sha = new jsSHA("SHA-512", "TEXT");
  sha.update(hashString);
  const hash = sha.getHash("HEX");
  const key = process.env.MERCHANT_KEY;
  const surl = "http://localhost:3000/payment/success";
  const furl = "http://localhost:3000/payment/fail";

  //code try end

  // const productInfo = user.cart.map((p) => p.desc);

  // console.log(productInfo);

  res.render("cart/cart", { user, totalAmount, key, txnid, email, firstname, surl, furl, hash });
  // res.render("cart/cart", { user, totalAmount, productInfo });
});

router.post("/user/:productid/cart", isLoggedIn, async (req, res) => {
  const { productid } = req.params;
  const userid = req.user._id;

  const user = await User.findById(userid);

  const isPresent = user.cart.some((product) => product.item.equals(productid));

  if (isPresent) {
    const newCartArray = user.cart.map((product) => {
      return product.item.equals(productid) ? { item: product.item, qty: product.qty + 1 } : product;
    });
    user.cart.splice(0, user.cart.length);
    user.cart.push(...newCartArray);
    await user.save();
  } else {
    user.cart.push({ item: productid });
    await user.save();
  }

  res.redirect("/user/cart");
});

router.delete("/user/:productid/cart", isLoggedIn, async (req, res) => {
  try {
    const { productid } = req.params;
    const userid = req.user._id;

    const user = await User.findById(userid);
    await User.findByIdAndUpdate(user._id, { $pull: { cart: { item: productid } } });

    res.redirect(`/user/cart`);
  } catch (e) {
    console.error(e);
    req.flash("error", e.message);
    res.redirect("/error");
  }
});

module.exports = router;
