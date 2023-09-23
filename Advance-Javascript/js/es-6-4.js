// class
alert("hello");

// override
// globally
function alert(text) {
  console.log(text);
}
// var abc = 10;

// all the global code get attached to window object

console.log(window);

// project the code
// Class prevent code from overriding
// class can have multiple function i.e methods
// class can have multiple variables i.e properties

// class is a collection properties and methods

class Human {
  hands = 2;
  constructor(value) {
    this.hands = value;
  }
  eating() {
    console.log("human can eat with ", this.hands - 1, " hand");
  }
}

// run class functionality we need object of class
let human = new Human(4); // its user to create the // outer construct
human.eating();
