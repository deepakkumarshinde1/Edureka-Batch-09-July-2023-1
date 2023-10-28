const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AppRoutes = require("./routes/AppRoutes");

const app = express();
const PORT = 3030;
// const MONGODB_URI = `mongodb://127.0.0.1:27017/batch09July`;
const MONGODB_URI = `mongodb+srv://admin:admin123@zomato-batch.vcqmomm.mongodb.net/batch09July?retryWrites=true&w=majority`;

app.use(cors());
// post type data is disabled in express
// we need to enable it
app.use(express.json()); // json format
app.use(express.urlencoded({ extended: false })); // form-data and other formarts

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
