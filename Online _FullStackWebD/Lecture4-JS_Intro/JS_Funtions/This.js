function checkThis() {
  console.log(this);
}

let obj = {
  a: 10,
  b: "sa",
  c: true,
  d: function () {
    console.log(this);
  },
  e: {
    l: 124,
    m: "ds",
    n: function () {
      console.log(this);
    },
  },
};
