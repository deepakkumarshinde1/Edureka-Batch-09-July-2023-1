const express = require("express");
const LocationController = require("../controllers/LocationController");
const RestaurantController = require("../controllers/RestaurantController");
const AppRoutes = express.Router();

AppRoutes.get("/", LocationController.getHome);

AppRoutes.get("/get-locations-list", LocationController.getLocationList);

AppRoutes.get(
  "/get-restaurant-list-by-location-id/:loc_id",
  RestaurantController.getRestaurantList
);

AppRoutes.get(
  "/get-restaurant-details-by-id/:id",
  RestaurantController.getRestaurantById
);

AppRoutes.get("/get-meal-type-list", RestaurantController.getMealTypeList);

AppRoutes.get(
  "/get-menu-items-by-restaurant-id/:r_id",
  RestaurantController.getMenuItemsByRestaurantId
);

module.exports = AppRoutes;
