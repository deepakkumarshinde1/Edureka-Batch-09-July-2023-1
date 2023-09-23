class PrintData {
  data = "Welcome to edureka";
  printData() {
    setTimeout(() => {
      window.location.assign("https://google.com");
    }, 1000);
  }
}

let printObj = new PrintData();
printObj.printData();

// in function  keyword function "this" always refers to window/global object
// in arrow "=>" function "this" always refers to nearest function definition context instance
