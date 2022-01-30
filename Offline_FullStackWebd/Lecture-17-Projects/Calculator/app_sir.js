const buttons = document.querySelectorAll("button");
const input = document.getElementById("input");
for (const button of buttons) {
  button.addEventListener("click", function () {
    const buttonText = button.innerText.trim();

    if (buttonText === "X") {
      input.value += "*";
    } else if (buttonText === "C") {
      input.value = "";
    } else if (buttonText === "=") {
      //If expression is not evaluated then catch block will be executed
      try {
        input.value = eval(input.value);
      } catch (error) {
        console.log(error.message);
        input.value = "Invalid Operation";
      }
    } else {
      input.value += buttonText;
    }
  });
}
