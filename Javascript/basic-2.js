let a = 20;
let b = 30;

// arithmetic operator's
let result = a + b;
// console.log(result);

result = a - b;
// console.log(result);

result = a * b;
// console.log(result);

result = a / b;
// console.log(result);

result = a % b; // modulus (reminder)
// console.log(result);

// assignment operator's
let a1 = 10;
a1 += 10; // a1 = a1 + 10;
a1 -= 10; // a1 = a1 - 10;
a1 *= 10; // a1 = a1 * 10;
a1 /= 10; // a1 = a1 / 10;
a1 %= 10; // a1 = a1 % 10;

let a2 = 10;
// a2 = a2 + 1;
// a2 += 1

// inc operator
a2++; // post inc
++a2; // pre inc

// dec operator
a2--; // port dec
--a2; // pre dec

let a3 = 10;
let b3 = ++a3;

// console.log("b3", b3);
// console.log("a3", a3);

// compare operators
// > < >= <= === !==

// if is conditional statements
let a4 = 30; // number
let b4 = 30; // string

// == (data)
// === data and datatype
// >= i.e greater then or equals to

if (a4 >= b4) {
  // true block runs
  console.log("Yes");
} else {
  // else condition
  console.log("No");
}

// logical operators
// and && i.e left cond and right condition must be true
// or || i.e left cond or right condition must be true
// not !  check or make a negation of value

let a5 = 10;
let b5 = 30;
let c5 = 20;

if (a5 === b5 || b5 === c5) {
  console.log("logical yes");
} else {
  console.log("logical no");
}

let present = false;
// convert it to false or false true
// !false i.e true
present = !present; // true
present = !present;
console.log(present);
// if... else switch

// if
// if .. else
// if ... else if  ... else if .....else
if (4 === 5) {
  console.log(" 4 is equals to 5");
}

if (4 === 5) {
  console.log(" 4 is equals to 5");
} else {
  console.log(" 4 is not equals to 5");
}

if (4 === 5) {
  console.log(" 4 is equals to 5");
} else if (3 === 4) {
  console.log(" 3 is  equals to 4");
} else if (2 === 3) {
  console.log(" 2 is  equals to 3");
} else {
  console.log("equals not found");
}

// switch
let department = "Finance"; // HR  Technical Non-tech
switch (department) {
  case "Finance":
    console.log("Finance operations here");
    break;
  case "HR":
    console.log("HR operations here");
    break;
  case "Technical":
    console.log("Technical operations here");
    break;
  case "Non-Technical":
    console.log("Non-Technical operations here");
    break;
  default:
    console.log("Invalid department");
    break;
}

if (department === "Finance") {
  console.log("Finance operations here");
} else if (department === "HR") {
  console.log("HR operations here");
} else if (department === "Technical") {
  console.log("Technical operations here");
} else if (department === "Non-Technical") {
  console.log("Non-Technical operations here");
} else {
  console.log("Invalid department");
}

// let value = 5;
// switch (value) {
//   case value === 5:
//     console.log("Greater the 2");
//     break;
// }

// loops

// for (init ; cond ; inc /dec)
for (let start = 1; start <= 5; start++) {
  console.log("for", start, "Welcome to edureka, its awesome");
}

// while
let start = 1;
while (start <= 5) {
  console.log("while", start, "Welcome to edureka, its awesome");
  start++;
}

// do while
let start_1 = 1;
do {
  console.log("do while", start_1, "Welcome to edureka, its awesome");
  start_1++;
} while (start_1 <= 5);

// functions
