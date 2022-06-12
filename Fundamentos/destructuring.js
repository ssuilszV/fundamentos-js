// novo recurso de 2015
const pessoa = {
    nome: "Luis",
    idade: 17,
    endereco: {
        rua: "VCB",
        numero: 602,
    }

}

//TIRAR, NOME E IDADE, DO OBJETO PESSOA
const { nome, idade} = pessoa //uma forma um pouco mais longa
console.log(nome, idade)

const {nome: n, idade: i } = pessoa //forma de criar uma variavel dentro do destructuring e setar no console.log mais simplificado.
console.log(n, i);

const { endereco: { rua: r, numero: num}  } = pessoa

console.log(`${n} tem ${i} anos, e mora na rua ${r}, de numero ${num}` )
