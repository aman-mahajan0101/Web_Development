const express = require("express");

const { db } = require("./db/model");

const app = express();

db.sync({ force: true })
  .then(() => {
    app.listen(8383, () => {
      console.log("server started on http://localhost:8383");
    });
  })
  .catch((err) => {
    console.error(new Error("Could not start db"));
  });
