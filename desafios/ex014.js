function checarAnoBissexto(ano){
    let valor = ""
    ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0 ? valor = true : valor = false  
    return valor
}
console.log(checarAnoBissexto(2020))
