const pilotos = ["Sena", "Prost", "Schumacher", "Hamilton"];
// indexação começa pelo zero.
console.log("\nindexação começa a partir do zero.");
console.log(pilotos[0]);
console.log(pilotos[3]);

// acessando o comprimento deste array
console.log("\nacessando o comprimento do array");
console.log(pilotos.length);

// interando o array
console.log("\ninterando o array com for i");
for (let i = 0; i < pilotos.length; i++) {
  console.log(pilotos[i]);
}

console.log("\ninterando o array com for of");
for (let piloto of pilotos) {
  console.log(piloto);
}

console.log("\ninterando o array com for in");
for (let piloto in pilotos) {
  console.log(pilotos[piloto]);
}

// adicionando um elemento
console.log("\nadicionando na ultima posição");
pilotos.push("Rubinho barrichelo");
console.log(pilotos);
console.log("\nadicionando na primeira posição");
pilotos.unshift("Drugovich");
console.log(pilotos);

// deletando um elemento
console.log("\ndeletando um elemento do array na última posição");
pilotos.pop();
console.log(pilotos);
console.log("\ndeletando um elemento do array na primeira posição");
pilotos.shift();
console.log(pilotos);

// dividindo o array em 2
let equipeAzul = [];
let equipeVermelha = [];
for (let i = 0; i < pilotos.length; i++) {
  if (i % 2 == 0) equipeAzul.push(pilotos[i]);
  else equipeVermelha.push(pilotos[i]);
}
console.log(`\nAntiga equipe: ${pilotos}
  Equipe Azul: ${equipeAzul}
  Equipe Vermelha: ${equipeVermelha}`);

/**
 * obs:
 * slice não modifica array.
 * splice modifica
 */
const equipeAmarela = pilotos.slice(0, 2);
const equipeVerde = pilotos.slice(2, 4);

console.log("\nEquipe Amarela: ");
console.log(equipeAmarela);
console.log("\nEquipe Verde: ");
console.log(equipeVerde);

console.log("\nAntiga Equipe: ");
console.log(pilotos);

// imprimindo todos os valores de um vetor 3x4
const vector = [
  ["Cibernética", "Nuvem", "Algoritmo"],
  ["Robótica", "Inovação", "Virtual"],
  ["Digital", "Cibersegurança", "Inteligência"],
];

let count = 0;
for (let i = 0; i < vector.length; i++) {
  for (let j = 0; j < vector[i].length; j++) {
    console.log(`${count++}. ${vector[i][j]}`);
  }
}
