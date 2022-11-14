const { Router } = require("express");
const { prisma } = require("../db");

const api = Router();

api.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  return res.send(users);
});

api.get("/users/:id", async (req, res) => {
  const id = +(req.params.id);
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return res.send(user);
});

api.post("/users", async (req, res) => {
  const { body } = req;
  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });
  res.send(user);
});

api.delete("/users/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    await prisma.user.delete({ where: { id } });
    res.send("deleted");
  } catch (err) {
    res.stFatus(500).send("Error deleting user");
  }
});

api.put("/users/:id", async (req, res) => {
  try {
    const id = +req.params.id;
    const { body } = req;
    const user = await prisma.user.update({
      where: { id },
      data: {
        email: body.email,
        name: body.name,
      },
    });
    res.send(user);
  } catch (err) {
    res.status(500).send("updateddd errroror");
  }
});

exports.api = api;
