function somarNumeros(...valores){
    let lista = []
    lista.push(valores.reduce((acumulador,atual) => acumulador + atual))
    console.log(lista)
}
somarNumeros(10,10,10)
