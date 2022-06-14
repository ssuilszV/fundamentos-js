function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O número sorteado dessa vez foi o : ${opcao}`) 
} while (opcao != -1)