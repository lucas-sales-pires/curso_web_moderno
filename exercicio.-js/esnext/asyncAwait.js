//com promise
const http = require("http")
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        let saida = ""
        http.get(url, resposta => {
            resposta.on("data", data => {
                saida += data
            })
            resposta.on("end", () => {
                try {
                    resolve(JSON.parse(saida))
                } catch (e) {
                    reject(e.message)
                }
            })
        })
    })

}
// Promise.all([getNome("A"), getNome("B"), getNome("C")])
// .then(turmas => [].concat(...turmas))
// .then(alunos => alunos.map(aluno => aluno.nome))
// .then(nomes => console.log(nomes))

//Recurso do ES8
//Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
    const turmaA = await getTurma("A")
    const turmaB = await getTurma("C")
    const turmaC = await getTurma("C")
    return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto async function
obterAlunos().then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

