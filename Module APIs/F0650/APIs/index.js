const express = require("express");
const app = express();
const SERVER = {
  PORT: 3000,
  HOST: "localhost",
};

app.get("/", (request, response) => response.send("Esta é a página HOME"));
app.post("/contato", (req, res) => console.log(req.body));
app.listen(SERVER.PORT, () =>
  console.log(`Acess: ${SERVER.HOST}:${SERVER.PORT}`)
);
