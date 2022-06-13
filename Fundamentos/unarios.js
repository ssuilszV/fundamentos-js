let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1 //prefixado gera uma "rapidez" em ler o código
console.log(num1)

console.log(++num1 === num2--) //o js lê o código, mas interpreta o num2-- como apenas num2 por que o "--" foi escrito depois, nao tendo tanta prioridade assim
console.log(num1 === num2)