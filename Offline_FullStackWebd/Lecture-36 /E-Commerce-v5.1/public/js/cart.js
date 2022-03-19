const cartContainer = document.querySelector(".quantity-container");
const quantity = document.querySelector(".quantity");

console.log(quantity);
//quantity null aa rhi h as ejs script ke through le rha ho input but vo ejs ke through accept kaise krega idk

cartContainer.addEventListener("click", async (e) => {
  const tar = e.target;
  if (tar.classList.contains("fa-minus")) {
    console.log("minus clicked");
    const id = e.target.getAttribute("product-id");
    const val = quantity.innerText;
    console.log(val);
    quantity.innerText = val - 1;
    const res = await axios.post(`/user/${id}/dec/cart`);
  } else if (tar.classList.contains("fa-plus")) {
    console.log("plus clicked");
    const id = e.target.getAttribute("product-id");
    const val = quantity.innerText;
    console.log(val);
    quantity.innerText = val - 1;
    const res = await axios.post(`/user/${id}/inc/cart`);
  }
});
