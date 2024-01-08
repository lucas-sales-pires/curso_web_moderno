const axios = require("axios/lib/axios");


const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const filtroH = m => m.genero === 'M'

const filtroM = f => f.genero === 'F'



const menorSalario = (salarioAtual, menor ) => {
    return menor.salario < salarioAtual.salario ? menor : salarioAtual
}

axios.get(url).then(response =>{
    const dados = response.data
    const homensBaixaRenda = dados.filter(filtroH).reduce(menorSalario)
    console.log(homensBaixaRenda)
    

})

