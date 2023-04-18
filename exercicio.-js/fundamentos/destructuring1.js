// novo recurso do ES2015

const pessoa = {
    nome: 'lucas',
    idade : 25,
    endereco:{
        logradouro: 'Rua itambé',
        numero: 57
    }
}

const { nome,idade} = pessoa
console.log(nome,idade)

const{nome:n, idade: i} =pessoa
console.log(n,i)

const{endereco:{logradouro,numero}}=pessoa
console.log(logradouro,numero)
