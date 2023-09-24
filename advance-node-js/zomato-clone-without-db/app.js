const express = require("express");
const AppRouter = require("./routes/AppRouter");
const server = express();
const PORT = 3030;

server.use(express.static("public"));

server.set("views", "./views"); // specify the views directory
server.set("view engine", "pug"); // register the template engine
// how to inject routing in server
// .use() ==> express middleware
// middleware ==> inject a logic in your project runtime

server.use("/", AppRouter); // "/" => prefix routing  path

server.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});

// to call a custom module we need to call
// it with the path
