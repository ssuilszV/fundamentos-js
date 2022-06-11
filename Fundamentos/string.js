const escola = ("IFTM - Campus");

//Usando charAt podemos puxar uma letra em posição especifica. (começando de 0, e não 1)


console.log(escola.charAt(2));

console.log(escola.charCodeAt(1));

console.log(escola.indexOf('3')); //Usando indexOf ele busca o a posição da letra, nesse exemplo a 4º posição.

console.log(escola.substring(1)); //Ele mostrará sua string, porem da posição que vc escolher, dai pra frente
console.log('Escola ' .concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));

console.log("Luis, Kaily, Sakar" .split(","))