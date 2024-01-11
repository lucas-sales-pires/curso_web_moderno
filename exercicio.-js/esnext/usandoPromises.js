//com promise
const http = require("http")
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resposta => {
            let saida = ""
            resposta.on("data", data => {
                saida += data
            })
            resposta.on("end", () => {
                try {
                    resolve(JSON.parse(saida))
                } catch (e) {
                    reject(e)
                }
            })
        })

    })
}
// let nomes = []

// getNome("A").then(alunos => {
//     nomes = alunos.map(a => "A " + a.nome)
//     getNome("B").then(alunosB => {
//         nomes = nomes.concat(alunosB.map(b => "B " + b.nome))
//         getNome("C").then(alunosC => {
//             nomes = nomes.concat(alunosC.map(c => "C " + c.nome))
//             console.log(nomes)

//         })
//     })

// })

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))
