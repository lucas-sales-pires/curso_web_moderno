function despesasTotais(dados){
    console.log(dados.map(n=> n.preco).reduce((atual,acumulador) => atual+acumulador))

}

despesasTotais([
    {nome:"Jornal online", categoria:"Informação",preco:89.99},
    {nome:"Cinema", categoria: "Entretenimento", preco: 150}
])
