const sayMyName = () => console.log("Rafael");
const runFunction = (fn) => fn();

runFunction(sayMyName);
console.log(runFunction(Math.random));
