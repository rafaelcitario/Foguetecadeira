class Conta {
  saldo = 0;
  saque(valor = 0) {
    if (this.saldo <= 0) {
      return `Não foi possível realizar a transação. Seu saldo é de ${this.saldo}`;
    }
    this.saldo -= valor;
    return this.saldo;
  }
  deposito(valor = 0) {
    this.saldo += valor;
    return this.saldo;
  }
  #isEmpitySaldo() {
    if (this.saldo < 0) {
      return `Sua conta negativada no valor de ${Number.parseFloat(
        this.saldo
      ).toFixed(2)}, Entre em contato com nossa central e realize o pagamento.`;
    }
    return `Seu saldo é de R$${Number.parseFloat(this.saldo).toFixed(2)}`;
  }

  print(option = null) {
    if (option == null) {
      return console.log(this.#isEmpitySaldo());
    }
    return console.log(option);
  }
}

class Itau extends Conta {
  constructor() {
    /**
     * Se retirarmos o super não será possivel reescrevermos o atributo saldo.
     * Sem o super o this não funciona, sendo assim impossíbilitando a chamado do atrib saldo
     *
     */
    super();
    this.saldo = 500;
  }
}

const contaItau = new Itau();
contaItau.print();
contaItau.deposito(200);
contaItau.print();
contaItau.saque(500);
contaItau.print();
contaItau.deposito(405268);
contaItau.print();
