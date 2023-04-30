// Função em JS é First-Class Object(Citizens)
// Highter-order function

// Criar de forma literal

function fun1(){}

//Armazenas em uma variável
const fun2 = function() {}

//Armazenar em um array
const array = [function(a,b){return a + b},fun1,fun2]
console.log(array[0](2,3))
