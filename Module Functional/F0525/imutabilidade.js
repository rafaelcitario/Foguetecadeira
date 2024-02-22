/**
 * Imutabilidade é um conceito onde não devemos modificar o dado de determinada variavel.
 * Ou seja se tivermos uma variável declarada bola que recebe o valor azul.
 * Ela deve se mander com valor azul. Resumindo, devera ser uma constante......
 *
 * Não que tudo deva ser constante, no entanto devemos pensar muito bem
 * antes de modificar os dados de uma variável. De sempre preferênça por criar uma nova.
 *
 * Segue exemplo de imutabilidade abaixo.
 */

const cart = {
  quantity: 2,
  total: 200,
};

// Se quisermos mudar o valor de quantidade, não devemos modificar desta forma:
cart.quantity = 3; // errado.

// a forma que deve ser feita:
const newCart = { ...cart, quantity: 3 };
console.log(newCart);
/**
 * Acima estamos usando o operador spread para espalharmos o conteúdo de cart dentro de new cart
 * e assim modificamos o valor de quantidade para 3 apenas no escopo de nosso new Cart.
 *
 */

class Cart {
  #quantity;
  #total;
  constructor(quantity, total) {
    this.#quantity = quantity;
    this.#total = total;
  }

  get total() {
    return this.#total;
  }

  get quantity() {
    return this.#quantity;
  }

  get print() {
    return {
      quantity: this.#quantity,
      total: this.#total,
    };
  }
}

const carrinhoDeCompras = new Cart(5, 400);
console.log(carrinhoDeCompras.quantity);
console.log(carrinhoDeCompras.total);
console.log(carrinhoDeCompras.print);

/**
 * Acima, aplicamos o conceito de imutabilidade junto com o conceito de encapsulamento.
 * utilizando # na frente de nossa variável tornamos ela protegida.
 * Assim impossibilitando que ao instanciar ou herdar nossa classe o dado seja alterado.
 *
 * Se quisermos alterar estes dados no futuro,
 * então criaremos um meto Set para que assim consigamos realizar a alteração.
 */
