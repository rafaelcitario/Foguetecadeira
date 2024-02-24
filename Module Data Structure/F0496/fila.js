// Modeling Queue Class
class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    this.data.push(value);
    return this.data;
  }

  dequeue() {
    this.data.shift();
    return this.data;
  }

  print(value = null) {
    if (value === null) {
      return console.log(this.data);
    }
    return console.log(value);
  }

  size() {
    return this.data.length;
  }
}

const fila = new Queue();
fila.print();
fila.enqueue("PHP");
fila.enqueue("Java");
fila.enqueue("Javascript");
fila.enqueue("Kotlin");
fila.enqueue("Go Lang");
fila.print();
fila.print(`Tamanho da fila: ${fila.size()}`);
