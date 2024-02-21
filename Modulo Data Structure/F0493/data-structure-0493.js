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
