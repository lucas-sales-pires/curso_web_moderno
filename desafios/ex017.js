function calcularMedia(...valores){
    let valor = []
    valor.push(...valores)
    let total = valor.reduce((acumulador,atual)=> acumulador + atual)
    let media = [total/valor.length]
    console.log(media)
}
calcularMedia(100,500,300,300,1000)
