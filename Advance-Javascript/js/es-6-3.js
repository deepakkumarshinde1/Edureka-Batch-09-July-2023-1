// let array = new Array()
let array = [];

// let obj = new Object()
let obj = {};

// let string = new String('Deepak')
let string = "Deepak";

// object literals
let result = "10";

let student = {
  name: "Deepakkumar",
  age: 31,
  mobile: 9088765687,
  result,
};

// string template | template literals
let stringText = `The student result is ${result}`;

// promise

// we will have a session at 5.00 pm
// there will be session --> success --> fulfilled/resolved --> .then() / try{}
// it will not there ---> fail ---> rejected --> .catch() / catch(){}

// synchronous ---> asynchronous
// --> EventLoop --->(WEB API) DOM , promises , ajax(fetch) , setTimeout , setInterval

// google we searching
//   --> Result
//   --> Not Result

// DB --->
//   --> Result
//   --- Not Give

// Java works on multithread
// Javascript on Single thread

// call a data from server --> Rest API call

// function getData() {
//   let url = "https://fakestoreapi1.com/products";
//   // HTTP methods
//   // GET (Default) to read from server ,
//   // PUT update data over server,
//   // POST add data over server
//   // DELETE delete any record
//   fetch(url, { method: "GET" })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function (error) {
//       console.log(error.message);
//     });
// }

// async await
// fetch
let list = [];
async function getData(url) {
  try {
    let response = await fetch(url, { method: "GET" });
    let data = await response.json(); // json -->[{...},{...}]
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

// getData("https://fakestoreapi.com/products");
// getData("https://fakestoreapi.com/carts");
// getData("https://fakestoreapi.com/users");

// class in javascript

// setTimeout --> run only once after time get out
console.log("hi");

// setTimeout(function () {
//   console.log("Timeout runs");
// }, 2000); // ms 1000ms ==== 1s

console.log("hello");

// setInterval --> runs for each time interval
let counter = 10;
let countText = document.querySelector("#countText");
let timeText = document.querySelector("#timeText");

let intervalId = setInterval(function () {
  countText.innerHTML = counter;
  if (counter === 0) {
    clearInterval(intervalId);
  }
  counter--;
}, 1000);

setInterval(function () {
  let date = new Date();
  timeText.innerHTML = date.toLocaleTimeString();
}, 1000);
