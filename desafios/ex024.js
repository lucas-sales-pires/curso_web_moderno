function buscarPalavrasSemelhantes(palavra,array){
    let lista = array
    let lista2 = []

  lista.map(function (n){
        if(n.includes(palavra)){
            lista2.push(n)
        }
    })
    console.log(lista2)

}
buscarPalavrasSemelhantes("pro",["programação","professor","educação","escola"])


