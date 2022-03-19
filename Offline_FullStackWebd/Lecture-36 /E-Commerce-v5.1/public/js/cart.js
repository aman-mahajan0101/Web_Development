// const cartContainer = document.querySelector(".quantity-container");
// const cartContainer = document.querySelector(".container");
// const cartContainer = document.querySelector(".col-8");
const cartContainer = document.querySelector(".card-body");
const quantity = document.querySelector(".quantity");
const amtquantity = document.querySelector(".amt-quantity");
const totalamt = document.querySelector(".list-group-item");

// console.log(cartContainer);
// console.log(quantity);
// console.log(amtquantity);
console.log(totalamt);

cartContainer.addEventListener("click", async (e) => {
  const tar = e.target;

  if (tar.classList.contains("fa-minus")) {
    console.log("minus clicked");
    const id = e.target.getAttribute("product-id");

    //For changing the input of inc and dec span
    let val = quantity.innerText;
    val = Number(val) - 1;
    quantity.innerText = val;

    //for changing the input of total price
    let amtval = amtquantity.innerText;
    amtval = Number(amtval) - 1;
    amtquantity.innerText = amtval;

    //for calculating total amount
    const price = e.target.getAttribute("price");
    console.log(price);

    totalamt.innerText = Number(price) * Number(amtval);

    const res = await axios.post(`/user/${id}/dec/cart`);
  } else if (tar.classList.contains("fa-plus")) {
    console.log("plus clicked");
    const id = e.target.getAttribute("product-id");
    //For changing the input of inc and dec span
    let val = quantity.innerText;
    val = Number(val) + 1;
    quantity.innerText = val;

    //for changing the input of total price
    let amtval = amtquantity.innerText;
    amtval = Number(amtval) + 1;
    amtquantity.innerText = amtval;

    //for calculating total amount
    const price = e.target.getAttribute("price");
    console.log(price);
    totalamt.innerText = Number(price) * Number(amtval);

    const res = await axios.post(`/user/${id}/inc/cart`);
  }
});
