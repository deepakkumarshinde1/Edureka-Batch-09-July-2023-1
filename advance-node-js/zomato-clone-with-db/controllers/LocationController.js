const LocationModel = require("../models/LocationModel");

module.exports.getHome = (request, response) => {
  response.send({
    status: true,
    message: "Welcome to api",
  });
};

module.exports.getLocationList = async (request, response) => {
  let result = await LocationModel.find();
  response.send({
    status: true,
    result,
  });
};
