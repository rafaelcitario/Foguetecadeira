// Implements a new Stack

class Stack {
  constructor() {
    this.top = -1;
    this.data = [];
  }

  push(value) {
    this.top++;
    this.data[this.top] = value;
    return this.data;
  }
  pop() {
    if (this.top < 0) {
      return undefined;
    } else {
      const poppedTop = this.data[this.top];
      delete this.data[this.top];
      this.top--;
      return this.data;
    }
  }
  peek() {
    return this.data[this.top];
  }

  isEmpity() {
    if (this.top < 0) {
      return true;
    }
    return false;
  }
  print(value = null) {
    if (value === null) {
      return console.log(this.data);
    }
    return console.log(value);
  }
  lenght() {
    return this.data.length;
  }
}

// call the stack
const pilha = new Stack();
pilha.print();
pilha.push("Leite");
pilha.push("Chocolate");
pilha.push("Farinha");
pilha.push("Fermento");
pilha.print(pilha.isEmpity());
pilha.print();
pilha.pop();
pilha.print(pilha.peek());
pilha.print(pilha.lenght());
