//função sem retorno

function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2,4,5,6,8,0,5,43);


//funcao com retorno

function soma(a, b = 10, c = 14) {
    return a + b
}

console.log(soma(2,3));
console.log(soma);
