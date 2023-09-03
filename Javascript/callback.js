// callback function
function abc(callback) {
  console.log("its abc");
  callback();
}

// function pqr() {
//   console.log("its pqr");
// }

// if we write a function on other function
// call such a function is called as callback function
abc(function () {
  console.log("its pqr");
});

abc(function () {
  console.log("xyz");
});

function aaa(callback) {
  callback();
}

aaa(function () {
  console.log("its bbb");
});

aaa(function () {
  console.log("its ccc");
});
