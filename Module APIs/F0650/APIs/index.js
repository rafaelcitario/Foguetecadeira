const express = require("express");
const app = express();
const SERVER = {
  PORT: 3000,
  HOST: "localhost",
};
app.use(express.json());
app.get("/", (request, response) => response.send("Esta é a página HOME"));
app.post("/contato", (req, res) => res.status(200).send(req.body.content)); // @ insomnia: {"content":"rafael"}

app.put("/put", (req, res) => {
  let user = { name: "Rafael", age: 28, nationality: "Brazilian" };
  console.log(user); // { name: "Rafael", age: 28, nationality: "Brazilian" }
  user = req.body; // @ insomnia: { name: 'Rafael Gomes', age: 28, nationality: 'Brazilian' }
  res.send(user);
  console.log(user); // { name: 'Rafael Gomes', age: 28, nationality: 'Brazilian' }
});

app.listen(SERVER.PORT, () =>
  console.log(`Acess: ${SERVER.HOST}:${SERVER.PORT}`)
);
