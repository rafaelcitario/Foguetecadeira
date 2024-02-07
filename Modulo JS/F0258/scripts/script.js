// manipulando arrays
let techs = ["html", "css", "js"]
// adicionar um item no fim
techs.push("nodejs")
console.log(techs)
// adicionar no começo
techs.unshift("sql")
console.log(techs)
// remover do fim
techs.pop()
console.log(techs)
// remover do começo
techs.shift()
console.log(techs)
// pegar apenas alguns elementos do array
techs.filter((itens) => {
    if (itens.includes("s")) {
        console.log(itens)
    }
})


// remover um ou mais em qualquer posição do array
// console.log(techs.splice(1, 3))
// encontrar a posição de um elemento no array
console.log(techs.indexOf("css"))