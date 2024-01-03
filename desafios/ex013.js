function receberSomenteParesDeIndicesPares(...valores){
    let lista = []
    for(let i = 0; i < valores.length ; i++){    
        if(i % 2 == 0){
            lista.push(valores[i])
            console.log(valores[i])
        }
    }
}
receberSomenteParesDeIndicesPares(12,12,1,33,54,45)
