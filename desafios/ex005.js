function estaEntre(numero,minimo,maximo,inclusivo = false){
    if(numero <=maximo && numero >= minimo){
        inclusivo = true
    }
    console.log( inclusivo)
}
estaEntre(10,50,100)
