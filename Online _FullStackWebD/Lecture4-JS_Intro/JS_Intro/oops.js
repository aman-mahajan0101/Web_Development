//Allow to create objects without defining class

var a = {}; //empty object

//one way of creating JS object - JSON
var bird = {
  x: 100,
  y: 20,
  color: "blue",
  eggs: ["one", "two", "three", "four"],

  fly: function () {
    console.log("Bird is flying", this.x, this.y);
  },
};

//for each loop
bird.eggs.forEach(function (val, idx) {
  console.log(val, idx);
});

var apple = {
  taste: "sweet",
  color: "red",
};

//Another way to create object - Using New keyword

function Fruit(taste, color) {
  this.color = color;
  this.taste = taste;
}

let mango = new Fruit("sweet", "yellow");
let orange = new Fruit("sour", "orange");

//Another way - Class keyword

class FruitClass {
  constructor(taste, color) {
    this.taste = taste;
    this.color = color;
  }
}

let FruitClass2 = class {
  constructor(taste, color) {
    this.taste = taste;
    this.color = color;
  }
};

let kiwi = new FruitClass("sour", "green");
let kiwi2 = new FruitClass("sour", "green");
