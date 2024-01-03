function removerVogais(palavra){
    let palavraSemVogais = palavra.replace(/[aeiouAEIOU]/,"")
    console.log(palavraSemVogais)
}
removerVogais("jacinto")
