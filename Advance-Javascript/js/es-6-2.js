// ES ==> ECMA Script

// destructuring array
let array = [10, 20];
// let varOne = array[0];
// let varTwo = array[1];

let [varOne, varTwo] = array;

console.log(varOne, varTwo);

// spread operator array
// create new copy of array
let array1 = [10, 20, 30];
let array2 = [100, 200, 300];

//let array3 = [...array1]; // new copy
let array3 = [...array1, ...array2]; // marg array
console.log(array3);

// destructuring of js object
let restaurant = {
  name: "KFC",
  city: "Nashik",
  costForTwo: 500,
};

restaurant.city = "pune";

let { name: restName, city: restCity } = restaurant;
console.log(restName, restCity);

// spread operator object
// create a new copy;
// marg a more one object
let rest = {
  name: "KFC",
  costForTwo: 500,
};

let cityDetails = {
  city: "Nashik",
  locality: "Ashoka marg",
};

//let restDetails = {...rest};// new copy;
let restDetails = { ...rest, ...cityDetails }; // new copy;
console.log(restDetails);

// let productList = [{ name: "dell", price: 40000, city: "Mumbai" }];
// let [{ price }] = productList;
// console.log(price);
