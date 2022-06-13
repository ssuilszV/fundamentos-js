 function compras(trabalho1, trabalho2){
    const comprarSorv = trabalho1 || trabalho2
    const comprar50pl = trabalho1 && trabalho2
//  const comprar32pl = !!(trabalho1 ^ trabalho2) // bitwise
    const comprar32pl = trabalho1 != trabalho2
    const manterSau = !comprarSorv

    return { comprarSorv, comprar50pl, comprar32pl, manterSau}
 }

 console.log(compras(true, true)) //se eu fizer os dois trabalhos
 console.log(compras(true, false)) //se eu fizer apenas 1
 console.log(compras(false, false)) //se eu nao fizer nenhum