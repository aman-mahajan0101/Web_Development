let str = "this is aman's string";
let a = "aman";
let s1 = "this is ${a} string";
let longstr = "this is \
a very long \
string";
console.log(str);
console.log(s1);
console.log(longstr);

console.log(longstr.length);

let s = "this is a easy job";

console.log(s.indexOf("a")); //tells the first index at which element is found
console.log(s.indexOf("a", 9)); //tells the index after 9 index where the given key is found
console.log(s.lastIndexOf("a")); //start searching from the back
console.log(s.lastIndexOf("a", 12)); //leave space from the back

//String Methods

let mainStr = "this-is-a-long string";

//slice
let smallStr = mainStr.slice(2, 6);
let smallStr1 = mainStr.slice(-8, -4); //negative indexes can also be used which is not possible in substring and this is the difference between the 2

console.log(smallStr);
console.log(smallStr1);

//substring
let smallStr2 = mainStr.substring(7, 10);

console.log(smallStr2);

//substr
let smallStr3 = mainStr.substr(3, 4); //Here first value is the starting point and second value is the length of the substring we want

console.log(smallStr3);
