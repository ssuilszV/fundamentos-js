const valores = [7.7, 9.2 , 10, 3.4, 17.17]
console.log(valores[0], valores[3]);
console.log(valores[10]);

//como nao temos a casa 10, podemos criar
//valores[10] = 80;
//     ^       ^        ^
//  let      casa   valor para atribuir
valores[10] = 80;
console.log(valores);
console.log(valores.length); //length (quantos elementos temos no array)

valores.push({id: 3}, false, null, 'teste');
console.log(valores)

console.log(valores.pop()) //exclui o ultimo elemento do array

delete valores[0] //deleta a casa que vc quiser no array

console.log(valores);

console.log(typeof valores);