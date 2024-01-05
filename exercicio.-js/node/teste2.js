const url = ("http://files.cod3r.com.br/curso-js/funcionarios.json")
const axios = require("axios")

axios.get(url).then(resposta => {
    const funcionarios = resposta.data
    const menorSalario = (func,funcAtual)=>{
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    const mulheresChinesas = funcionarios.filter(sexo => sexo.genero == "F").filter(pais => pais.pais == "China").reduce(menorSalario)
   
    

    console.log(mulheresChinesas)
} )

