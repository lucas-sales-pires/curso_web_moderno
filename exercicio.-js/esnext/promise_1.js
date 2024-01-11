let a = 1
console.log(a)

const primeiroElemento =elemento => elemento[0]
function transformarMinusculo(texto){
    return texto.toLowerCase()
}


let p = new Promise(function (resolve){
    resolve(["Ana","Bia","Carlos"])
})  .then(primeiroElemento)
    .then(primeiroElemento)
    .then(transformarMinusculo)
    //.then(valor => console.log(valor))
    .then(console.log)
    



