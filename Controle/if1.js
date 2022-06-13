function soBoaNota(nota) {
    if(nota >=7 ){
        console.log("Parabéns! Você foi aprovado! sua nota foi:", nota)
    }
}

soBoaNota(8.1)
soBoaNota(6)

function seForVerdadeiroEuFalo(valor) { 

    if(valor) {
        console.log("É verdade... ", valor)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo("?")
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([2,3])
seForVerdadeiroEuFalo({})