// if we want to use module we need to import
// es5 (node js)
const http = require("http");
const fs = require("fs");

// es6 (react js)
// import http from 'http';

// request ==>  send from client to server
// response ==> send from server to client
let server = http.createServer((request, response) => {
  if (request.url !== "/favicon.ico") {
    let fileName = null;
    switch (request.url) {
      case "/":
        fileName = "./index.html";
        break;
      case "/about":
        fileName = "./about.html";
    }

    fs.readFile(fileName, (error, data) => {
      if (error) {
        response.write("file not found");
      } else {
        response.write(data);
      }
      response.end();
    });
  }
});

server.listen(3001, () => {
  console.log("server is running on port ", 3001);
});
// port number must be grater then 3000
