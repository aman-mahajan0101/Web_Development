function fizzbuzz(n) {
  var fb3 = 0;
  var fb5 = 0;
  for (let i = 1; i <= n; i++) {
    fb3 += 1;
    fb5 += 1;
    var str = "";
    if (fb3 === 3) {
      str += "fizz";
      fb3 = 0;
    }
    if (fb5 === 5) {
      str += "buzz";
      fb5 = 0;
    }
    if (str === "") {
      console.log(i);
    } else {
      console.log(str);
    }
  }
}
