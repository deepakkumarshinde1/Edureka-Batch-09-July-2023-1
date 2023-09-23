// create a express server

// import express
const express = require("express");

// create a server instance
const server = express();

// add routing***
/**
 *   supports a http methods
 *  GET, POST, PUT, DELETE
 */
server.get("/", (request, response) => {
  // send hello world message
  response.send("Hello form express");
});

server.get("/about", (request, response) => {
  response.send("About Page");
});

server.get("/projects", (request, response) => {
  response.send("Projects Page");
});

// add a port
server.listen(3000, () => {
  console.log("server is running on prot ", 3000);
});
