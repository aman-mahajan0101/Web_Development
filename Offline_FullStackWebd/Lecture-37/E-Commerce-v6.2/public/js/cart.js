const cartContainer = document.querySelector(".cart");
const ul = document.querySelector(".list-group");
var items = ul.getElementsByTagName("li");
var total = ul.lastElementChild;

cartContainer.addEventListener("click", async (e) => {
  const tar = e.target;
  const id = e.target.getAttribute("product-id");
  const name = e.target.getAttribute("product-name");
  const price = e.target.getAttribute("product-price");

  if (tar.classList.contains("fa-minus")) {
    if (Number(tar.parentElement.nextElementSibling.innerText) === 1) {
      tar.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
      // items[i].children[0].style.display = "none";
      for (var i = 0; i < items.length - 1; i++) {
        if (items[i].children[0].outerText.includes(name)) {
          console.log(items[i]);
          items[i].style.display = "none";

          total.children[0].innerText = Number(total.children[0].innerText) - Number(price);
        }
      }

      const res = await axios.delete(`/user/${id}/cart`);
    } else {
      tar.parentElement.nextElementSibling.innerText = Number(tar.parentElement.nextElementSibling.innerText) - 1;

      for (var i = 0; i < items.length - 1; i++) {
        if (items[i].children[0].outerText.includes(name)) {
          let quan = Number(items[i].children[1].innerText);

          quan -= 1;

          items[i].children[1].innerText = quan;

          total.children[0].innerText = Number(total.children[0].innerText) - Number(price);
        }
      }

      const res = await axios.post(`/user/${id}/dec/cart`);
    }
  } else if (tar.classList.contains("fa-plus")) {
    //For changing the input of inc and dec span
    tar.parentElement.previousElementSibling.innerText = Number(tar.parentElement.previousElementSibling.innerText) + 1;

    //For total amount change and quantity change

    for (var i = 0; i < items.length - 1; i++) {
      if (items[i].children[0].outerText.includes(name)) {
        let quan = Number(items[i].children[1].innerText);

        quan += 1;

        items[i].children[1].innerText = quan;

        total.children[0].innerText = Number(total.children[0].innerText) + Number(price);
      }
    }

    const res = await axios.post(`/user/${id}/inc/cart`);
  }
});
