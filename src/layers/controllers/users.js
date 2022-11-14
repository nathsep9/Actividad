const { Router } = require("express");
const { getUsers } = require("../services/users");

const usersController = Router();

// index page
usersController.get("/", async function (req, res) {
  const users = await getUsers();
  res.render("users/index.ejs", { users });
});

exports.usersController = usersController;

