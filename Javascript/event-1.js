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
let img = document.querySelector("#img");

changeText.addEventListener("click", function (event) {
  //set a data to element
  textArea.innerHTML = "<i style='color:green'>Edureka !!!</i>";
  img.src = "./images/meal-type.png";
  img.classList.add("add-circle");
});
