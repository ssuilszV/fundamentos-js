let valor//nao inicializada

console.log(valor)

valor = null; //ausencia de valores
console.log(valor)
//console.log(valor.toString()) !ERRO

const prod1 = {}
console.log(prod1.preco)
console.log(prod1)

prod1.preco = 5.00
console.log(prod1);

prod1.preco = undefined //EVITE ATRIBUIR UNDEFINED
console.log(!!prod1.preco)
console.log(prod1)

prod1.preco = null //sem preço (promoções seila)
console.log(!!prod1.preco)
console.log(prod1)