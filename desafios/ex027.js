function filtrarPorQuantidadeDeDigitos(valores, quantidade) {
    let lista = valores
    let copia = []
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].toString().length == quantidade) {
            copia.push(lista[i])

        }
    }
    console.log(copia)
}

filtrarPorQuantidadeDeDigitos([1, 2, 3, 2, 4, 5, 6, 10, 20], 2)

