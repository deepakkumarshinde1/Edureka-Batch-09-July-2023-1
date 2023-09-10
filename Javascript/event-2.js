// DOM is document object model
// make connection in html & javascript we a dom

// console.log(document);
// dom methods
// getElementById
// getElementsByClassName
// getElementsByTag

// querySelector
// querySelectorAll

// let h1Elements = document.querySelectorAll("h1"); // list
// console.log(h1Elements);

// let h1Element = document.querySelector("#changeText"); // single element
// console.log(h1Element.innerHTML); // read element
// h1Element.style.color = "red";

// event
let changeText = document.querySelector("#changeText");
let textArea = document.querySelector("#textArea");
let inputOne = document.querySelector("#input-1");

changeText.addEventListener("click", function (event) {
  //set a data to element
  let value = inputOne.value;
  textArea.innerHTML = value;

  // set a data to input
  inputOne.value = "";
  // collect value of input ===> .value
  // set a value to input ===> .value
});

inputOne.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    let value = inputOne.value;
    textArea.innerHTML = value;
    inputOne.value = "";
  }
});
