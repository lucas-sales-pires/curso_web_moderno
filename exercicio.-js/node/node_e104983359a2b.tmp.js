function cumprimentar(nome) {
  console.log(`Olá, ${nome}`)
}
function converterEmAnosParaDias(dias) {
  console.log(dias * 365)
}
function calcularSalario(horas, salario) {
  console.log(`Salário igual a R$ ${(horas * salario).toFixed(2)}`)
}
function nomeDoMes(mes) {
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  console.log(meses[mes - 1])
}
function maiorOuIgual(a, b) {
  a >= b ? console.log(true) : console.log(false)
}
function multiplicar(a, b) {
  let total = 0
  for (let i = 0; i < b; i++) {
    total += a
  }
  console.log(total)
}
function repetir(a, b) {
  let lista = []
  for (let i = 0; i < b; i++) {
    lista.push(a)
  }
  console.log(lista)

}
function simboloMais(quantidade){
  let mais = ""
  for(let i =0 ; i < quantidade; i++){
    mais += "+"
  }
  console.log(mais.split())
}


function receberPrimeiroEUltimoElemento(elementos){
  const ultimoElementoIndice = [...elementos].length -1
  const ultimo2 = [...elementos][ultimoElementoIndice]
  const primeiro = elementos[0]
  console.log(primeiro,ultimo2)
}
receberPrimeiroEUltimoElemento([7,14,"ola"])

function removerPropriedade(objeto,parametro){
  const obj = {}
  Object.assign(obj,objeto)
  delete obj[parametro]
  console.log(obj)
}

function filtrarNumeros(array){
  console.log(array.filter(n => typeof n == "number"))
}

function objetoParaArray(objeto){
  console.log(Object.entries(objeto))
}

function receberSomenteParesDeIndicesPares(lista){
  let resultado = []
  for(let i = 0 ; i < lista.length; i++){
    if(lista[i] % 2 == 0 && i % 2 == 0){
      resultado.push(lista[i])
    }
  }
  console.log(resultado)
}

function checarAnoBissexto(ano){
  if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
    console.log(true)
  }
  else{
    console.log(false)
  }
}

function somarNumeros(lista){
  let valores = []
  let total = 0
  valores.push(lista)
  lista.flatMap(n => n).map(n => n).reduce((atual,somado) =>{
    total = atual + somado 
  })
  console.log(lista)
}

somarNumeros([10,10,10])
