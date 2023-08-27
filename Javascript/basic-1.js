// javascript
//   create  pop up in javascript
// alert(123);
// alert("hello");
// alert ==> function
// function is block of code
// alert function is in-build

// testing some output
// console => In-Build object javascript
// console.log(data)
// alert1(1);
// console.log("Hello");
// console.log(2 * 2);

// store a data in container called as variable
// we can declare a variables with 3 different keywords
// var , let , const
// = called as assign

// data types in javascript

let brand = "Hotel Taj"; //string
let city = "Mumbai"; //string
let minCost = 500; // number
let rating = 4.6; // number
let isOnlyVag = false; // true => boolean
let contactNo = null; // object
let totalRooms; // undefined

// string , number , boolean , object , undefined

// typeof is to check of variable
console.log(brand, typeof brand);
console.log(city, typeof city);
console.log(minCost, typeof minCost);
console.log(rating, typeof rating);
console.log(isOnlyVag, typeof isOnlyVag);
console.log(contactNo, typeof contactNo);
console.log(totalRooms, typeof totalRooms);

// loosely coupled
let a = 10;
console.log(typeof a);
a = "abc";
console.log(typeof a);
a = true;
console.log(typeof a);
a = null;
console.log(typeof a);

let b = 10;
console.log(typeof b);
b = Number("10"); // Not a Number NaN
// string ==> number by using "Number" :: typecasting
// NaN is reserved word with a data type as number
let isNumber = isNaN(b);
console.log(isNumber);
// true => string
// false => number
console.log(b, typeof b);
