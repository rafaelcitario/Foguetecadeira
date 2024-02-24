// callback

function animalSounds(animal, sound) {
    if (animal.toLowerCase() === 'cachorro' || animal.toLowerCase() === 'dog') {
        console.log(`O Cachorro faz: ${sound()}`)
        return;
    }
    console.log("o Cachorro não faz nenhum som")
}
animalSounds('gato', () => {
    return 'Au Au';
})