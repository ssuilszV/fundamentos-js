const notas = [6.6, 7.4, 9.8, 8.1, 7.7]

for(i in notas){
    console.log(i,`${notas[i]}`)
}

const pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    idade: 17,
    peso: 80
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]} `)
}
