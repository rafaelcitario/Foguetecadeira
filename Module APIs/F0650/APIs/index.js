const express = require("express");
const app = express();
const SERVER = {
  PORT: 3000,
  HOST: "localhost",
};

app.listen(SERVER.PORT, () =>
  console.log(`Acess: ${SERVER.HOST}:${SERVER.PORT}`)
);
