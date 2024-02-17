const { inherits } = require("util");
const { EventEmitter } = require("events");

class Person {
  constructor(name) {
    this.name = name;
  }
}

inherits(Person, EventEmitter);
const chapolin = new Person("O Chapolin Colorado");

chapolin.on("Help", (name, message) => {
  console.log(`${name}:\n\t\t ${message}`);
});

chapolin.emit("Help", chapolin.name, "Palma, palma. Não priemos canico!");
chapolin.emit("Help", "Dona Clotilde", "Vá se fuder!");
