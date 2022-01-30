const img1 = document.querySelector("img");
let istrue = true;
setInterval(() => {
  if (istrue) {
    img1.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1640051702482-66022fd487cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
    );
  } else {
    img1.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1638864616275-9f0b291a2eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
    );
  }

  istrue = !istrue;
}, 1000);
