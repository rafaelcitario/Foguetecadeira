# O que é Programação Orientada à Objetos?

Programação orientada à objetos é um paradigma de linguagem.
Utilizamos este paradigma para nos auxiliar na construção de um software mais seguro contra bugs e erro.

Em POO existem alguns conceitos como:
Classes
Heranças
Polimorfismos
Abstrações

Quando utilizamos TS (TypeScript) ou outras linguagens totalmente orientadas à objetos, também podemos ultilizar o conceito de Interfaces.

A seguir um exemplo de criação de classes:
```
class Livro{
    constructor(name){
        this.name = name;
    }
    
    get tipo(){
        return `Ficção`;
    }
}
```

A seguir um exemplo de herança utilizando a classe Livro:
```
class HarryPotter{
    constructor(name){
        super(name);
    }
}
const harryPotter = new HarryPotter("Harry Potter");
console.log(harryPotter.name) // Imprime nome do livro.
console.log(harryPotter.tipo) // Imprime o tipo do livro.
```

A seguir um exemplo de polimorfismo utilizando a classe Livro:
```
class Livro{
    constructor(name){
        this.name = name;
    }

    get tipo(){
        return "";
    }
}

class CodigoLimpo extends Livro{
    constructor(name){
        super(name);
    }

    get tipo(){
        return "Educação"
    }

}

const codigoLimpo = new CodigoLimpo("Codigo Limpo");
console.log(codigoLimpo.name) // Imprime o nome do livro.
console.log(codigoLimpo.tipo) // Imprime o tipo do livro.

```

A seguir um exemplo de abstração utilizando a classe Livro:
```
class Livro{
    constructor(){
        if(this.constructor === Livro){
            throw new Error("THIS IS A SUPER CLASSE, PLEASE EXTENDS AND IMPLEMENTS.")
        }
    }

    get tipo(){
        throw new Error("THIS METHOD HAS'NT BEEN IMPLEMENTED YET!")
    }
}

new Livro // Erro no constructor

const gameOfThrones = new Livro();
console.log(gameOfThrones.tio()) // Erro de implementacao no método tipo.

class GameOfThrones extends Livro{
    constructor(name){
        super();
        this.name = name;
    }

    get tipo(){
        return "Ficção"
    }
}

const gameOfThrones = new GameOfThrones("Game Of Thrones");
console.log(gameOfTrones.name) // Imprime o nome do livro.
console.log(gameOfThrones.tipo) // Imprime o tipo do livro.
```
