const path = require("path");
console.log(path.basename(__filename));

const message = require("./exports");
console.log(message());

const getFlag = require("./process");
const processMessage = getFlag;

console.log(
  `Olá, ${processMessage("--name")}! ${processMessage("--greeting")}`
);
