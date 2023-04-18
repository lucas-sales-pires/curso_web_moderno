console.log(Math.ceil(6.1)) //aredonda

const obj1 ={}
obj1.nome = 'Bola'

//obj['nome'] = 'Bola2'
console.log(obj1.nome)

function Loja(produto){
    this.produto = produto
    this.exec = function(){
        console.log('Exec...')
    }
    
}
const compra2 = new Loja('Cadeira')
const compra3 = new Loja('Mesa')
console.log(compra2.produto)
console.log(compra3.produto)
compra3.exec()
