module.exports.getHomePage = (request, response) => {
  // response.send("Hello i am from routing");
  response.render("index");
};

module.exports.getAboutPage = (request, response) => {
  response.send("Hello i am from routing about page");
  //response.render("index");
};
