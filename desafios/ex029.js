
function receberMelhorEstudante(objeto) {
    let estudantes = Object.entries(objeto)
    let media = 0
    let melhorAluno =""
    let maiorMedia = 0

    for(let [aluno,nota] of estudantes) {
        let total = nota.flatMap(n => n).reduce((acumulador, atual) => acumulador + atual)
        media = total / nota.length
        if(media > maiorMedia){
            maiorMedia = media 
            melhorAluno = aluno
        }
    }
    console.log(`O melhor aluno foi ${melhorAluno} com a média de ${maiorMedia}`)


}
receberMelhorEstudante({
    João: [7.6, 8.9, 6], Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
})
