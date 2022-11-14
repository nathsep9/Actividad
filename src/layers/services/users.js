const { User } = require("../models");

function getUsers() {
  return User.findMany();
}
exports.getUsers = getUsers;
