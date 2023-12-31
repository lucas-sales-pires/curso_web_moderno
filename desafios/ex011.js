
function filtrarNumeros(...a) {
    let lista = []
    lista.push(...a)
    let numeros =  lista.filter(n => typeof n == "number")

   return  numeros
}

console.log(filtrarNumeros("a",52,"c",80))
