
function funcaoDaSorte(valor){
    const aleatorio = Math.floor(Math.random()*10+1)
    valor == aleatorio ? console.log("Parabéns! O número sorteado foi " + aleatorio):console.log("Que pena ! O número sorteado foi o "+ aleatorio)
    console.log(aleatorio)
}
funcaoDaSorte(5)
