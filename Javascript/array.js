// array ==> store data
// store same or different type of data

// array is set key/index value pair
// keys/index are auto-gen and start with 0
// keys/index of every array will start from zero
let array = [10, 20, 30, 40, 50];
// console.log(array);

// add in array (push)
//  unshift() it adds data from start
// array.push(40, 60, 70, 80);
array.splice(3, 0, 40); // (index, deleteCount, addData(optional))
// console.log(array);

// delete data (splice)
// array.pop() delete data from end
// array.shit() delete data from start
//array.splice(4, 1);// delete data from given location
// console.log(array);

// ready data
// single data
// console.log(array[3]);

// multi data (forEach)
let sqrArray1 = [];
array.forEach(function (value, index) {
  //   console.log(value, index);
  sqrArray1.push(value * value);
});

// search
let search = 30;
// find
// find return only value
// if result is not found we get undefined
let findResult = array.find(function (value, index) {
  return value === search;
});
// console.log(findResult);
// filter
// filter return array
// if result is not found we get []
let filterResult = array.filter(function (value) {
  return value === search;
});

// console.log(filterResult);
// new array where i want a square of a number
console.log(array);
// recreate array

let sqrArray = array.map(function (value, index) {
  return "<p>" + value * value + "</p>";
});

// convert array  to string
let list = sqrArray.join("");
console.log(list);
