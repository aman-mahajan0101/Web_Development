let a = ["Apple", "Mango", "Guava","Grapes","peach"];
for (let val in a) {
  console.log(a[val]);
}
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
console.log(a.indexOf("Mango"));
console.log(a.indexOf("Kiwi"));

console.log(a.join(" * "))

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
//Changing the ARRAY using splice and splice can be used to add new elements in the array
//the 1 and 2 here defines at which position should the new element get inserted and the 2 defines how many elements we want to delete  
a.splice(1,2,"Kiwi","Pineapple")
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

//Changing the ARRAY using splice and splice can be used to delete elements in the array
//the 0 and 2 here defines at which position should the new element get inserted and the 2 defines how many elements we want to delete/removed 
a.splice(0,2,"Orange","Pomegrande")
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

//Concat 2 arrays
fruits = ["a","b","c","d"];
fruits = fruits.concat(a);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}