//sem promise
const http = require("http")
const getTurma = function (letra,callback){
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url,resposta=>{
        let saida = ""
        resposta.on("data",data=>{
            saida += data
        })
        resposta.on("end",()=>{
            callback(JSON.parse(saida))
        })
    })
 
}

let nomes = []

getTurma("A",alunos => {
    nomes = alunos.map(a =>"A "+ a.nome)
    getTurma("B",alunosB =>{
        nomes = nomes.concat(alunosB.map(b=> "B " +b.nome))
        getTurma("C",alunosC =>{
            nomes = nomes.concat(alunosC.map(c =>"C "+ c.nome))    
            console.log(nomes)

        })
    })

})






























