function getRandomInt(max) {
    return Math.floor(Math.random() * max );
  }
console.log(getRandomInt(25))  


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
console.log(getRandomArbitrary(5,10))

let lista = [1,2,3,4,5]
let lista2 = lista.forEach(e => console.log(e))

let lista3 = [1,2,3,4,5]
let lista4 = lista3.map(n => n*2)
let lista5 = lista3.map(function(n){return n*2})
console.log(lista4)
console.log(lista5)
