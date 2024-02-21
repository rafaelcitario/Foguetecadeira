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
    if (this.top < 0) {
      return "This Stack is Empity!";
    }
    return `TOP STACK: ${this.data[this.top]}`;
  }
}

// use stack
const pilha = new Stack();
pilha.push("Popular C");
pilha.push("Polemic Knowledge");
pilha.push("BR Society");
console.log(pilha.peek());
