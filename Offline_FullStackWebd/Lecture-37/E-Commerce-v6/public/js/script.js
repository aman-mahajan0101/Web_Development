const productContainer = document.querySelector(".products");

productContainer.addEventListener("click", async (e) => {
  if (e.target.nodeName === "I") {
    const id = e.target.getAttribute("product-id");
    // console.log(e.target);
    // console.log(id);
    const res = await axios.post(`/user/${id}/like`);
    // console.log(res);

    if (e.target.classList.contains("fas")) {
      e.target.classList.remove("fas");
      e.target.classList.add("far");
    } else {
      e.target.classList.add("fas");
      e.target.classList.remove("far");
    }
  }
});
