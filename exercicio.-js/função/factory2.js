function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto:0.1*preco
    }
}
console.log(criarProduto('Notebook',2199.49))
console.log(criarProduto('Ipad',5000,00))
