const express = require("express");
const app = express();

// the function inside app.use will run for each incoming request
// app.use((req, res) => {
//   console.log("inside app.use");

//   res.send("<h1>Hello from Server!</h1>");
// });

//Routes
app.get("/", (req, res) => {
  res.send("<h1>This is root Route</h1>");
});

app.get("/cat", (req, res) => {
  res.send("<h1>MEOW</h1>");
});

app.get("/dog", (req, res) => {
  res.send("<h1>WOOF WOOF!!</h1>");
});

app.get("*", (req, res) => {
  res.send("<h1>Invalid URL</h1>");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
