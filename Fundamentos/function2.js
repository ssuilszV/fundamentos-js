// armezanando uma funcao em uma variavel

const imprimirSoma = function(a, b){
    console.log(a + b)

}

imprimirSoma(2,3)

//Armazenar uma função ARROW em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3));

//retorno implicito
const subtracao = (a, b) => a - b //Maneira de colocar uma função de unica linha (com o return)
console.log(subtracao(10,9))

const imprimir2 = a => console.log(a)
imprimir2('NICE!!!!')