const input = document.getElementById("input");
const table = document.querySelector("table");

table.addEventListener("click", function (e) {
  var count = 0;
  var y = e.target.innerText;
  if (y === "X") {
    input.value += "*";
  } else if (e.target.innerText === "C") {
    input.value = "";
  } else if (e.target.innerText === "=") {
    count = count + 1;
    try {
      input.value = eval(input.value);
    } catch (error) {
      console.log(error.message);
      input.value = "Invalid Operation";
    }
  } else {
    if (count === 0) {
      input.value += y;
    } else {
      input.value = y;
    }
  }
});
