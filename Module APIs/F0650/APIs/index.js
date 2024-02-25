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
  user = req.body; // @ insomnia: { name: 'Rafael Citario', age: 28, nationality: 'Brazilian' }
  res.send(user);
  console.log(user); // { name: 'Rafael Citario', age: 28, nationality: 'Brazilian' }
});

app.delete("/delete/:id", (req, res) => {
  res.send(req.params.id);
});

/**
 *  Chamada de parametros
 * query
 * id
 * body
 */

app.get("/chamada/:id", (req, res) => res.send(req.params.id)); // localhost:3000/chamada/3 <= id
app.get("/chamada/", (req, res) => res.send(req.query.q)); // localhost:3000/chamada/?q=rafael <= query
app.post("/chamada", (req, res) => res.send(req.body)); // localhost:3000/chamada <= body

app.listen(SERVER.PORT, () =>
  console.log(`Acess: ${SERVER.HOST}:${SERVER.PORT}`)
);
