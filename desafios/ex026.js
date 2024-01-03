function inverter(valor){
    let copia = {}
    for([chave,valor] of Object.entries(valor)){
        copia[valor] = chave
    }
    console.log(copia)
}
inverter({a:1,b:2,c:3})
