function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40 }
console.log(rand(obj))

console.log(rand({ min: 400})) // Atribui o minimo de 400 entao, mostrará nums de 400 a 1000
console.log(rand({})) //jogando objetos entre 0 a 1000 (valores que foram definiidos de começo)