const locations = require("../models/location.json");

module.exports.getHomePage = (request, response) => {
  // response.send("Hello i am from routing");
  response.send({
    status: true,
    message: "Welcome to api",
  });
};

module.exports.getLocationList = (request, response) => {
  let { lName } = request.params;
  let data = locations.filter((value) => {
    return value.location.toLowerCase() === lName.toLowerCase();
  });
  if (data.length > 0) {
    response.send({
      status: true,
      data,
    });
  } else {
    response.send({
      status: false,
      message: "Location not found",
    });
  }
};
