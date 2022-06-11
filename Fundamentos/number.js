//primeira forma de declarar um number
const peso1 = 1.0;
const peso2 = Number('2.0');

//vendo se um numero é inteiro ou não!
console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.133, avaliacao2 = 6.390;

const total = avaliacao1 * peso1 + avaliacao2 * peso2, media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //Esse ".toFixed é usado para delimitar o número de casas decimais depois da virgula"

console.log(media.toString(2)) //Se quiser passar o valor para um texto, use o "toString"
// e se ainda quiser use o valor de 2 para transformá-lo em binário
console.log(typeof Number); //verificando que Number que criamos é uma função.
