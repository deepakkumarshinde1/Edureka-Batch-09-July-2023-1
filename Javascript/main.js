let inputOne = document.querySelector("#input-1");
let inputTwo = document.querySelector("#input-2");
let calcType = document.querySelector("#calc-type");
let textArea = document.querySelector("#textArea");
let ulList = document.querySelector("#ul-list");
let historyList = [];

calcType.addEventListener("change", function () {
  let valueOne = Number(inputOne.value);
  let valueTwo = Number(inputTwo.value);
  let type = calcType.value;
  let result = null;

  switch (type) {
    case "+":
      result = valueOne + valueTwo;
      break;
    case "-":
      result = valueOne - valueTwo;
      break;
    case "/":
      result = valueOne / valueTwo;
      result = result.toFixed(2);
      break;
    case "*":
      result = valueOne * valueTwo;
      break;
    case "%":
      result = valueOne % valueTwo;
      break;
  }

  //  string template literals
  let text = `Result of ${valueOne} ${type} ${valueTwo} is ${result}`;
  textArea.innerHTML = text;

  let history = `${valueOne} ${type} ${valueTwo} = ${result}`;
  historyList.unshift(history);
  printHistory();
});

function printHistory() {
  let list = historyList.map(function (value) {
    return `<li>${value}</li>`;
  });
  list = list.join("");
  ulList.innerHTML = list;
}
