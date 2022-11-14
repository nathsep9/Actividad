const { Router } = require("express");

const layers = Router();

layers.use("/users", require("./controllers/users").usersController);

layers.get("/", function (req, res) {
  res.render("index.ejs");
});

exports.layers = layers;
