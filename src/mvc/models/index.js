const { prisma } = require("../../db");

exports.User = prisma.user;
exports.Profile = prisma.profile;