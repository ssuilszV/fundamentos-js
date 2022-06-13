console.log("01)", '1' == 1) //São iguais (resultados)
console.log('02)', '2' === 2) // São EXTRITAMENTE IGUAIS? não... um é string e outro number

console.log('03)', '3' != 3) //vendo se os resiltados 3 e 3 são diferentes. Não são!

console.log('04)', '3' !== 3) //Vendo se as atribuições são EXTRITAMENTE diferentes. São... um é tipo string e outro number

console.log('05)', 3 < 2 )

console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) //1 Janeiro 1970
const d2 = new Date(0)

console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)