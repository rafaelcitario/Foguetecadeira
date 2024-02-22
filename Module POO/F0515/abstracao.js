/**
 * Note que usamos get em um metodo
 * quando utilizamos get em um metodo de classes, ele não é uma função e sim um atributo em seu momento de chamada.
 * ex de como não chamar: Parafuso.tipo()
 * ex de como chamar: Parafuso.tipo
 */
class Parafuso {
  constructor() {
    if (this.constructor === Parafuso) {
      throw new Error(
        "Wow! Calm down. This is a abstract class. Don't instantiate this, extends please!"
      );
    }
  }

  get tipo() {
    throw new Error("This has'nt been implemented yet.");
  }
}

class Fenda extends Parafuso {
  constructor() {
    super();
  }

  get tipo() {
    return "Fenda";
  }
}

class Philips extends Parafuso {
  constructor() {
    super();
  }

  get tipo() {
    return "Philips";
  }
}

const fenda = new Fenda();
const philips = new Philips();
const parafuso = new Parafuso();

console.log(fenda);
console.log(philips);
console.log(parafuso);

console.log(fenda.tipo);
console.log(philips.tipo);
console.log(parafuso.tipo);
