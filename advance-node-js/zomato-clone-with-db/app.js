const express = require("express");
const mongoose = require("mongoose");
const AppRoutes = require("./routes/AppRoutes");

const app = express();
const PORT = 3030;
const MONGODB_URI = `mongodb://127.0.0.1:27017/batch09July`;

app.use("/api", AppRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("database connected successfully.");
    app.listen(PORT, () => {
      console.log("Project is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
