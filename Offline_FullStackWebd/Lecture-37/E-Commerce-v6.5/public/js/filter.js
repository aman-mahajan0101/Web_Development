const filterContainer = document.querySelector(".class-main");

productContainer.addEventListener("click", async (e) => {
  console.log("clicked");
  if (e.target.nodeName === "OPTION") {
    const value = e.target.getAttribute("value");

    const res = await axios.post(`/products/filtered/${value}`);
  }
});
