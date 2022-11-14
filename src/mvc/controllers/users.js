const { Router } = require("express");
const { User } = require("../models");

const usersController = Router();

// index page
usersController.get("/", async function (req, res) {
  const users = await User.findMany();
  res.render("users/index.ejs", { users });
});

exports.usersController = usersController;
