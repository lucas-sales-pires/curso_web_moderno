

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
function simboloMais(quantidade) {
  let mais = ""
  for (let i = 0; i < quantidade; i++) {
    mais += "+"
  }
  console.log(mais.split())
}


function receberPrimeiroEUltimoElemento(elementos) {
  const ultimoElementoIndice = [...elementos].length - 1
  const ultimo2 = [...elementos][ultimoElementoIndice]
  const primeiro = elementos[0]
  console.log(primeiro, ultimo2)
}
receberPrimeiroEUltimoElemento([7, 14, "ola"])

function removerPropriedade(objeto, parametro) {
  const obj = {}
  Object.assign(obj, objeto)
  delete obj[parametro]
  console.log(obj)
}

function filtrarNumeros(array) {
  console.log(array.filter(n => typeof n == "number"))
}

function objetoParaArray(objeto) {
  console.log(Object.entries(objeto))
}

function receberSomenteParesDeIndicesPares(lista) {
  let resultado = []
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 == 0 && i % 2 == 0) {
      resultado.push(lista[i])
    }
  }
  console.log(resultado)
}

function checarAnoBissexto(ano) {
  if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
    console.log(true)
  }
  else {
    console.log(false)
  }
}

function somarNumeros(...lista) {
  let valores = []
  valores.push(lista.reduce((atual, somado) =>
    atual + somado
  ))
  console.log(valores)
}


function despesasTotais(objeto) {
  const total = objeto.reduce((atual, acumulador) => atual.preco + acumulador.preco)
  console.log(total)
}

function calcularMedia(numeros) {
  let total = numeros.reduce((atual, acumulador) =>
    atual + acumulador
  )
  const media = total / numeros.length
  console.log(media)
}

function areaDoTriangulo(a, b) {
  console.log((a * b / 2).toFixed(2))
}

function menorNumero(array) {
  console.log(Math.min(...array))
}

function funcaoDaSorte(numero) {
  const aleatorio = Math.floor(Math.random() * 10)
  numero == aleatorio ? console.log("Parabéns! O número sorteado foi o " + aleatorio) :
    console.log("Que pena! O número sorteado foi o " + aleatorio)
}
function contarPalavras(frase) {
  let string = frase
  console.log(string.split(" ").length)
}
function contarCaractere(letra, string) {
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].includes(letra)) {
      total += 1
    }
  }

  console.log(total)
}
function buscarPalavrasSemelhantes(reduzido, lista) {
  let frases = []
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].includes(reduzido)) {
      frases.push(lista[i])
    }
  }
  console.log(frases)

}
function removerVogais(palavra) {
  let palavraSemVogais = palavra.replace(/[aeiouAEIOU]/, "")
  console.log(palavraSemVogais)
}
function inverter(obj) {
  let objeto = {}
  for (let [chave, valor] of Object.entries(obj)) {
    objeto[valor] = chave
  }
  console.log(objeto)
}
function filtrarPorQuantidadeDeDigitos(lista, valor) {
  let lista2 = []
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].toString().length == valor) {
      lista2.push(lista[i])
    }
  }
  console.log(lista2)
}
function segundoMaior(...lista) {
  let segMaior = lista.sort((a, b) => a - b).length - 1
  console.log(segMaior)
}
function receberMelhorEstudante(objeto) {
  let estudantes = Object.entries(objeto)
  let maiorMedia = 0
  let alunoComMaiorMedia = ""
  let media = 0

  for(let [aluno,nota] of estudantes){
    let total = nota.map(n => n).reduce((atual,acumulador) => atual + acumulador)
    media = total / nota.length
    if(media > maiorMedia){
      maiorMedia = media
      alunoComMaiorMedia = aluno
    }
  }
  console.log(alunoComMaiorMedia,maiorMedia)

}
receberMelhorEstudante({
  João: [8, 7.6, 8.9, 6],
  Mariana: [9, 6.6, 7.9, 8,],
  Carla: [7, 7, 8, 9]
})
