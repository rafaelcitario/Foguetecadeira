/**
 * Básicamente o stateless é um conceito que nos orienta a não depender de dados externos.
 * exemplo a seguir:
 *
 */

// Statefull
let number = 2;
const square = () => {
  return number * number;
};
number = square();
console.log(number); // 4
/**
 * Aqui realizamos a programação imperativa onde ordenamos o passo a passo
 * para a resolução de um problema.
 *
 * No entanto este modo podemos conhecer como STATEFULL
 * pois ele depende de um dado externo que é o number.
 * Aqui ocorreu tudo normalmente, no entanto se chamarmos a função square novamente logo abaixo
 * o que sera que ela retorna?
 */
console.log(square()); // 16
/**
 * square agora retornou 16 ao inves de 4. Por que?
 * por que ela utilizou um dado externo (number)
 * e depois que number foi modificado o resultado de square também mudará.
 */

/**
 * Então o que é STATELESS?
 */

// Stateless
const newSquare = (n) => {
  return n * n;
};

/**
 * Esta função é Stateless pois não depende de nenhum dado externo.
 * sempre que quisermos usa-la, basta passar um valor como parametro e ela nos retorna este valor.
 */
