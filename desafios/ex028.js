function segundoMaior(...valores){
    let valor = valores
    let maior = valor.sort((b,a)=> a-b)
    console.log(maior[1])
}
segundoMaior(1,2,3,4,56,4,5)
