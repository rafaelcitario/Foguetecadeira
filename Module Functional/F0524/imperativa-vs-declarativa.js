/**
 * Aqui vamos abordar 2 exemplos de programação funcional.
 *
 * O primeiro conceito se chama programação imperativa.
 * Neste conceito falamos o passo a passo de como um problema deve ser tratado
 *
 * O Segundo conceito se chama programação declarativa.
 * Neste conceito montamos toda a extrutura necessaria para a entrada e saida de um dado.
 *
 * Vamos ver mais....
 */

// Imperativa
let number = 2;
const areaCircle = () => {
  const res = number * number;
  return res;
};
number = areaCircle();
console.log(number);

// Declarativa
const calcAreaCircle = (r) => {
  // diferentes formas de realizar a equação ao quadrado:
  // return r * r
  // return r ** 2
  return Math.pow(r, 2);
};

/**
 * Nota-se que a diferênça entre as duas formas de programação esta baseado em
 * nossa vontade no tratamento de determinado dado.
 *
 * Se queremos fazer algo rapido, apenas por hora, utilizamos imperativo.
 * Se queremos algo um pouco mais elaborado, utilizamos declarativa.
 */
