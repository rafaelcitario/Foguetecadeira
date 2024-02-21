// Estruturada
var valorHora = 50;
var tempoEstimado = 20;
var desconto = valorHora * tempoEstimado * (10 / 100);
var custoEstimado = valorHora * tempoEstimado - desconto;
console.log(custoEstimado);
// POO
class Servico {
  constructor(valorHora = 50, tempoEstimado = 0, desconto = 0) {
    this.valorHora = valorHora;
    this.tempoEstimado = tempoEstimado;
    this.desconto = desconto;
  }

  #calculeDiscount() {
    return (this.valorHora * this.tempoEstimado * this.desconto) / 100;
  }

  remuneracao() {
    const desconto = this.#calculeDiscount();
    return this.valorHora * this.tempoEstimado - desconto;
  }

  remuneracaoMensal() {
    const mes = 30;
    const remuneracaoDia = this.remuneracao();
    return remuneracaoDia * mes;
  }
}

const servico = new Servico(9.1, 8, 0);
console.log(
  "Valor cobrado por horas trabalhadas:\t\tR$",
  Number.parseFloat(servico.valorHora).toFixed(2)
);
console.log(
  "Tempo estimado para o serviço estar completo:\tR$",
  Number.parseFloat(servico.tempoEstimado).toFixed(2)
);
console.log(
  "Total de Desconto recebido:\t\t\tR$",
  Number.parseFloat(servico.desconto).toFixed(2)
);
console.log(
  "Valor da remuneração por este servico no dia:\tR$",
  Number.parseFloat(servico.remuneracao()).toFixed(2)
);
console.log(
  "Valor da Remuneração mensal por este serviço:\tR$",
  Number.parseFloat(servico.remuneracaoMensal()).toFixed(2)
);
