const express = require("express");
const path = require("path");
const { api } = require("./api");
const { mvc } = require("./mvc");

const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "mvc/views"),
]);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);
app.use("/", mvc);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: err.message,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
