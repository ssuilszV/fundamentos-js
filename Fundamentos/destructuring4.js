function ran([min = 0, max = 1000]) {
    if (min>max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(ran([50, 40])) //pegando numeros de no minimo 50 maximo 40, mas como fizemos uma regra IF, de que se o min for maior que o máximo, ele trocaram de lugar, da tudo certinho.
console.log(ran([222])) //mudando apenas o minimo para 222
console.log(ran([, 100])) //mudando o máximo para 100
console.log(ran([])) //apenas lendo de 0 a 1000