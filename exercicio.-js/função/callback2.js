notas = [7.7, 5.5, 8.9, 9.0]

//Sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//Com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

let notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)
