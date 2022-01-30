let a = 10;
console.log(a);

let b = [1, 2, 3, 4, 5];
console.log(b);

//Varibales and their scopes
c = 20; //Global Scope
var d = 30; //Funciton Scope
let e = 120; //Block Scope

function variables() {
  let a = 5;
  if (a == 5) {
    var b = 10;
    console.log("Inside " + b);
  }
  console.log("Outside " + b);
}

sqrt_n(10); //Will not be Called due to function hoisting
sqrt_root(10); //Will be called
//Function Declaration
function sqrt_root(n) {
  console.log(Math.sqrt(n));
  return "hello";
}

//Function Hoisting
var sqrt_n = function (n) {
  console.log(Math.sqrt(n));
  return;
};
