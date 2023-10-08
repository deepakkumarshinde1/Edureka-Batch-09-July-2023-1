const express = require("express");
const AppController = require("../controllers/AppController");
const AppRouter = express.Router();

AppRouter.get("/", AppController.getHomePage);
AppRouter.get("/locations/:lName", AppController.getLocationList);

module.exports = AppRouter;
