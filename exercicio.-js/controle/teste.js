Number.prototype.entre = function(minimo,maximo){
    return this >= minimo && this <= maximo 
}
function imprimirResultado(nota){
    if(nota.entre(8,10)){
        console.log('Ótimo')
    }
}
imprimirResultado(10)
