const process = require("process");
const questions = [
  "Qual é o seu framework de desenvolvimento web favorito e por quê?",
  "Como você escolhe o melhor framework para um novo projeto?",
  "Quais são os benefícios e desafios de trabalhar com um framework?",
  "Como você avalia a escalabilidade de um framework?",
  "Quais são as diferenças entre um framework frontend e backend?",
];
const awnsers = [];

function ask(index = 0) {
  process.stdout.write(`\n${questions[index]} > `);
}

ask();
process.stdin.on("data", (data) => {
  awnsers.push(data.toString().trim());
  if (awnsers.length < questions.length) {
    ask(awnsers.length);
  } else {
    for (let awnser in awnsers) {
      console.info(
        `Question: ${questions[awnser]}? Awnser: ${awnsers[awnser]}`
      );
    }
    process.exit();
  }
});
