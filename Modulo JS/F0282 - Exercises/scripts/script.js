/**
 * ### Transformar notas escolares
 * Crie um algoritmo que transforme as notas de um sistema
 * numerico para sistema de notas em caractéres ex: A, B, C, D
 * 
 * 90 para cima = A
 * entre 80 e 89 = B
 * entre 70 e 79 = C
 * entre 60 e 69 = D
 * menor que 60 = F
 */
function getGrade(grade) {
    switch (true) {
        case grade >= 90:
            grade = 'A'
            break;
        case grade >= 80 && grade <= 89:
            grade = 'B'
            break;
        case grade >= 70 && grade <= 79:
            grade = 'C'
            break;
        case grade >= 60 && grade <= 69:
            grade = 'D'
            break;
        default:
            grade = 'F'
            break;
    }

    return grade;
}
console.log(getGrade(100))

/**
 * ### Sistema de gasto familiar
 * Crie um objeto que possuiá 2 propriedades, ambas do tipo array:
 * receitas: []
 * despesas: []
 * 
 * Agora, crie uma função que ira calcular o total de receita e despesa
 * e ira mostrar uma menssagem se a familia esta com saldo positivo ou negativo, seguido do valor do saldo.
 */
const family = {
    receitas: [1000.00, 1.500, 2000.25, 1200.15, 1800.10],
    despesas: [600.35, 800.30, 1000.42, 700.11, 1200.08],
}
function getBalanceOf(client) {
    let totalRevenue = 0;
    let totalExpense = 0;
    for (let prop in client) {

        for (let content of client[prop]) {
            switch (prop) {
                case 'receitas':
                    totalRevenue += content
                    break;
                case 'despesas':
                    totalExpense += content
                    break;
            }
        }
    }

    const balance = totalRevenue - totalExpense
    let message = ""
    if (balance >= 0) {
        return message = `Sua família tem um saldo positivo de R$${balance.toFixed(2)}`
    }
    return message = `Sua família tem um saldo negativo de R$${balance.toFixed(2)}`
}
console.log(getBalanceOf(family))

/**
 * ### Celsius em Firenheit
 * Crie uma função que receba uma string em Celsius ou Firenheit
 * e faça a conversão de uma para outra
 * C = (F-32) * 5/9
 * F = C * 9/5 + 32
 */
/**
 * Returns a converted temperature from Celsius to Fahrenheit or from Fahrenheit to Celsius.
 * @param {string} temp - the temperature string in either Celsius or Fahrenheit
 * @return {string} the converted temperature (e.g "27C°" or "32F°")
 */
const getConverterTemperature = (temp) => {
    let temperature;
    let isCelsiusExists = temp.toUpperCase().includes("C")
    let isFirenheintExists = temp.toUpperCase().includes("F")

    // Tratamento de erro
    if (!isCelsiusExists && !isFirenheintExists) {
        throw new Error("TA DOIDÃO JÃO?! FAZ FAVOR, ESCREVE EM CELSIUS OU FARENHEIT TIU.")
    }

    try {
        // Conversão de Celsius para Fahrenheit
        if (isCelsiusExists) {
            temperature = temp.replace("C", "")
            return `${Number.parseInt(temperature) * 9 / 5 + 32}F°`
        } else {
            // Conversão de Fahrenheit para Celsius
            temperature = temp.replace("F", "")
            return `${(Number.parseInt(temperature) - 32) * 5 / 9}C°`
        }
    } catch (e) {
        return e
    }
}
console.log(getConverterTemperature("32C"))

/**
 * ### Buscando e contando dados dentro de um Array
 * Baseado no Array de livros por categoria abaixo, faca os seguintes desafios:
 *  [x] Contar o número de categorias e o número de livros em cada categoria.
 *  [x] Contar o número de autores
 *  [x] Mostrar livros do autor Auguto Cury
 *  - Transformar a função acima em uma função que ira receber o nome do autor 
 * e devolver todos os livros desse autor
 */

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, Pai Pobre",
                author: "Robert Kiyosaki e Sharon L. Lechter",
            }
        ]
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                title: "Vocé insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ]
    },
]

// TOTAL DE CATEGORIAS & TOTAL DE LIVROS
const totalCategories = booksByCategory.length
console.log(`Total de categorias: ${totalCategories}`)

let totalBooksByCategory
for (let indexProps in booksByCategory) {
    totalBooksByCategory = booksByCategory[indexProps].books.length
}
console.log(`Total de livros por categoria: ${totalBooksByCategory}`)

// TOTAL DE AUTORES
/* 
Passamos um parâmetro para esta função que recebe um array vazio.
Assim, não precisamos criar um array para chamar esta função futuramente.
 
Dentro desta função, aplicamos a seguinte lógica:
utilizamos o filter para percorrer todo o array.
Com a desestruturação, temos acesso aos livros.
Tendo acesso aos livros, conseguimos realizar um loop dentro desses livros em busca de autores.
Realizamos uma verificação:
    se o autor não existir dentro do array passado como parâmetro, inserimos o autor dentro do array.
Fora do loop filter, declaramos uma variável que irá receber o comprimento total do array.
 (obs: é muito importante que o valor desta variável seja atribuído fora do loop.
    Quando atribuímos o valor à variável ou até mesmo chamamos array.length dentro do loop,
    o que nos é retornado é um array contendo 2 elementos de arrays dentro dele.
    
    Quando chamamos array.length fora do loop, o que nos é retornado é um array contendo 1 elemento
    de array dentro dele com todos os nomes de autores dentro dele.)
Por último, adicionamos um template string para ser o retorno desta função.
Chamamos a função getTotalAuthors dentro de um console.log.
*/
const getTotalAuthors = (array = []) => {
    booksByCategory.filter(({ books }) => {
        for (let auth in books) {
            if (!array.includes(books[auth].author)) {
                array.push(books[auth].author)
            }
        }
    })
    const totalAuthors = array.length
    return `Total de autores: ${totalAuthors}`
}
console.log(getTotalAuthors())

// MOSTRAR LIVROS DO AUTOR AUGUSTO CURY
const getAllBooksByAugustoCury = (author, array = []) => {
    booksByCategory.filter(({ books }) => {
        for (let book in books) {
            if (books[book].author.includes(author) && !array.includes(books[book].title)) {
                array.push(books[book].title)
            }
        }
    })
    let augustoCuryBooksList = `Todos os livros do autor: \n${author}: \n\n${array.join("\n")}`
    return augustoCuryBooksList

}
console.log(getAllBooksByAugustoCury("Augusto Cury"))
