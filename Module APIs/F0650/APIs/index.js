const express = require("express");
const app = express();
const SERVER = {
  PORT: 3000,
  HOST: "localhost",
};
app.use(express.json());
app.get("/", (request, response) => response.send("Esta é a página HOME"));
app.post("/contato", (req, res) => res.status(200).send(req.body.content));
app.listen(SERVER.PORT, () =>
  console.log(`Acess: ${SERVER.HOST}:${SERVER.PORT}`)
);
