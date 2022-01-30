let a = ["Apple", "Mango", "Guava"];
// for (let val in a) {
//   console.log(val);
// }
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
a.push("kiwi");
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
a.pop();
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
a.unshift("kiwi");
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
a.shift();
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
console.log(a.indexOf("Kiwi"));
