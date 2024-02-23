# First Class Function

#### Funções de primeira classe.

- Podemos entender que por funções de primeira classe
  a função sayMyName.
  Ela é uma função de primeira classe pois esta sendo usada como uma váriavel.

- A função runFunction esta recebendo sayMyName como parâmetro e inicialiando ela automaticamente.

```
const sayMyName = () => console.log("Rafael");
const runFunction = (fn) => fn();

runFunction(sayMyName);
```
