const express = require("express");
const AppController = require("../controllers/AppController");
// extract routing from express
const AppRouter = express.Router();

AppRouter.get("/", AppController.getHomePage);

AppRouter.get("/about", AppController.getAboutPage);

// export
// es5 format
module.exports = AppRouter;

// custom module
