// Math Methods
let number = 144;

let result = Math.sqrt(number);

let number2 = 14.9;
console.log(Math.round(number2));
// 14 is round
// 14 nearest low round number
console.log(Math.floor(number2));
// 15 nearest higher round number
console.log(Math.ceil(number2));
// console.log(result);

console.log(Math.trunc(number2));

// object methods
let restaurant = {
  name: "KFC",
  costForTwo: 500,
  city: "Nashik",
  opening: "09.00 am",
};

let keys = Object.keys(restaurant);
console.log(keys);

let values = Object.values(restaurant);
console.log(values);

let value = Object.entries(restaurant);
console.log(value);

// destructing

// spread operator
