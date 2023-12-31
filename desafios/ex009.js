function receberPrimeiroEUltimoElemento(...valores){
    let lista = []
    for(let i = 0 ; i < valores.length;i++){
        lista.push(valores[i])
    }
    
    console.log(lista[0],lista[lista.length -1])
}
receberPrimeiroEUltimoElemento(20,2,3,5,6)
