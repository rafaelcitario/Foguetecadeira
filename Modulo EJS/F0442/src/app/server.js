const express = require("express");
const SERVER = {
  HOST: "localhost",
  PORT: 3000,
};
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(SERVER.PORT, () =>
  console.log(`Server is running at ${SERVER.HOST}:${SERVER.PORT}`)
);
