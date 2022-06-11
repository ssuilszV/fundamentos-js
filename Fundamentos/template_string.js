const nome = "Luis", concatenacao = "Ola " + nome + "!";

const template =  `Olá ${nome}! `

console.log(concatenacao,"\n", template);

//expressoes matematicas tbm funcionam
console.log(`1+1 = ${1+1}`)

const up = text => text.toUpperCase()
console.log (`Salve... ${up('bora pro churras?')}!`)