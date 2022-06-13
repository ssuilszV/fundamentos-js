function tratarErro(erro){
    throw new Error('Infelzimente, ocorreu um problema')
}

function imprimirNome(obj) {
    try{
console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErro(e)
    }
}
const obj = {nome: 'Whinderson'}
imprimirNome(obj)