const { Router } = require("express");

const mvc = Router();

mvc.use("/users", require("./controllers/users").usersController);

mvc.get("/", function (req, res) {
  res.render("index.ejs");
});

exports.mvc = mvc;
