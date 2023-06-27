// url
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
//biblioteca axis
const axios = require('axios')
//filtro por chineses
const chineses = f => f.pais === 'China'
//filtro por genêro feminino
const mulheres = f => f.genero === 'F'
//
const menorSalario = (func,funcAtual) =>{
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response =>{
  const funcionarios = response.data
  const func = funcionarios
  .filter(chineses)
  .filter(mulheres)
  .reduce(menorSalario)
  console.log(func)
})

