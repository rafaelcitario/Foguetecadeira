const { EventEmitter } = require("events");

const emitter = new EventEmitter();
// events listenner
emitter.on("sayMyName", () => {
  console.log("Seu nome é desconhecido!");
});

// events call
emitter.emit("sayMyName");
emitter.emit("sayMyName");

/**
 * to emit event, is needle pass the same string at emit to on
 * EventEmitter().on("THIS STRING", () => {console.log("PUT A MESSAGE HERE")})
 * EventEmitter().emit("THIS STRING")
 */

emitter.once("greetings", (personName) => {
  console.log(`Hello, ${personName}! How are you.`);
});
emitter.emit("greetings", "Rafael");
emitter.emit("greetings", "Rafael");
emitter.emit("greetings", "Rafael");
emitter.emit("greetings", "Rafael");
emitter.emit("greetings", "Rafael");
emitter.emit("greetings", "Rafael");

/**
 * Even if you add several times EventEmitter.emit
 * Using EventEmitter.once just emit one times.
 */
