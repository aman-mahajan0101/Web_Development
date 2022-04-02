async function filter() {
  var value = document.getElementById("filter").value;
  console.log(value);
  const res = await axios.get(`/products/filtered/${value}`);
  window.location.replace(`/products/filtered/${value}`);
}
