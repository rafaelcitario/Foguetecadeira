class Atleta {
  peso;
  categoria;
  constructor(peso) {
    this.peso = peso;
  }

  definirCategoria() {
    if (this.peso <= 50) {
      return (this.categoria = "Infantíl");
    } else if (this.peso <= 65) {
      return (this.categoria = "Juvênil");
    } else {
      return (this.categoria = "Adulto");
    }
  }
}

class Lutador extends Atleta {
  constructor(peso) {
    /**
     * Passamos os atributos do constructor da classe Pai
     * tanto em nosso super, quanto em nosso constructor do filho
     * assim fazemos quase que um overwrite de constructor
     * e podemos adicionar novos atributos ou modificar alguns já herdados.
     *
     * Neste caso vamos reescrever o médoto de definir categoria de nossa classe pai
     *
     */
    super(peso);
  }

  definirCategoria() {
    if (this.peso <= 54) {
      return (this.categoria = "pluma");
    } else if (this.peso <= 60) {
      return (this.categoria = "leve");
    } else {
      return (this.categoria = "pesado");
    }
  }
}

const popo = new Lutador(80);
console.log(popo.peso);
console.log(popo.definirCategoria());
