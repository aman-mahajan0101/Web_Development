const cartContainer = document.querySelector(".cart");
const quantity = document.querySelector(".quantity");
const amtquantity = document.querySelector(".amt-quantity");
const totalamt = document.querySelector(".list-group-item");

// console.log(totalamt);

cartContainer.addEventListener("click", async (e) => {
  const tar = e.target;

  console.log(tar);

  if (tar.classList.contains("fa-minus")) {
    console.log("minus clicked");
    const id = e.target.getAttribute("product-id");

    //For changing the input of inc and dec span
    tar.parentElement.nextElementSibling.innerText = Number(tar.parentElement.nextElementSibling.innerText) - 1;

    const res = await axios.post(`/user/${id}/dec/cart`);
  } else if (tar.classList.contains("fa-plus")) {
    console.log("plus clicked");
    const id = e.target.getAttribute("product-id");

    //For changing the input of inc and dec span
    tar.parentElement.previousElementSibling.innerText = Number(tar.parentElement.previousElementSibling.innerText) + 1;

    const res = await axios.post(`/user/${id}/inc/cart`);
  }
});

/*
//for changing the input of total price
    let amtval = amtquantity.innerText;
    amtval = Number(amtval) - 1;
    amtquantity.innerText = amtval;

    //for calculating total amount
    const price = e.target.getAttribute("price");
    console.log(price);

    totalamt.innerText = Number(price) * Number(amtval);


    ...


     //for changing the input of total price
    let amtval = amtquantity.innerText;
    amtval = Number(amtval) + 1;
    amtquantity.innerText = amtval;

    //for calculating total amount
    const price = e.target.getAttribute("price");
    console.log(price);
    totalamt.innerText = Number(price) * Number(amtval);


    <button class="text-danger" type="submit"><i class="fas fa-trash fa-lg"></i></button>
*/
