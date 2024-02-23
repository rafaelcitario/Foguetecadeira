const numbers = [2, 4, 6, 8, 10];
const square = (n) => n ** 2;
// map esta sendo uma high-order function
/**
 * A principal caracteristica de uma high order function
 * é que ela recebe outra função como parametro e return um resultado.
 */
const squareNumbers = numbers.map((n) => n ** 2); // <-----
// const squareNumbers = numbers.map(square); // <-----
console.log(squareNumbers);
