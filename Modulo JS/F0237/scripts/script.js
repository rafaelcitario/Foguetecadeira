const weight = 110.5
console.log(typeof weight) // this type is number
let name = "Rafael"
let age = 28
let stars = 5
let isSubscribed = true

let student = {
    name: "Rafael",
    weight: 110.5,
    age: 28,
    stars: 5,
    isSubscribed: true
}

let message = `${student.name} de ${student.age} pesa ${student.weight} Kg`
console.log(message)

let students = []
students = [
    student,
]

student = {}
const rafael = {
    name: "Rafael",
    weight: 110.5,
    age: 28,
    isSubscribed: true,
}
const leigislane = {
    name: "Leigislane",
    weight: 65.5,
    age: 25,
    isSubscribed: false,
}

student = {
    rafael,
    leigislane,
}

students = [student.rafael, student.leigislane]
console.log(students)