const itens = [
    {descricao: 'Caneta', quantidade: 1,preco:3},
    {descricao: 'Régua', quantidade: 2,preco:5},
    {descricao: 'Borracha', quantidade: 2,preco:6}
]
let total =0
for(let i =0;i< itens.length;i++){
    total += itens[i].preco * itens[i].quantidade
}
console.log(total)

const total2 = itens.reduce((soma, itemAtual) => soma + itemAtual.preco * itemAtual.quantidade,0)
console.log(total2)
