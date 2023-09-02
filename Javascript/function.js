// function
// its a block of code ... use run a same logic again and again

// write a function
// () => argument body/ parameters

function functionName() {
  console.log("this is a function");
} // function definition

// function call
functionName();

// when variables outside function , they are called as global variables
let a = 10; // global
let b = 20; // global

// when variables are inside the function , they are called as local variables
function add(varOne, varTwo) {
  // varOne is local
  // varTwo is local
  //   console.log(varOne);
  //   console.log(varTwo);
  let result = varOne + varTwo;
  console.log("result is ", result);
}

// reuse a function again and again
add(a, b);
add(10, 50);
add(100, 50.6);
