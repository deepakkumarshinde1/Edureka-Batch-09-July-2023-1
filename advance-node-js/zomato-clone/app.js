const express = require("express");
const AppRouter = require("./routes/AppRouter");
const server = express();
const PORT = 3030;

server.use(express.static("public"));
server.use("/api", AppRouter); // "/" => prefix routing  path

server.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});

// to call a custom module we need to call
// it with the path
