const pessoa = function cumprimentar(nome){
    console.log('Olá '+nome+'!')
}

pessoa('lucas')

function getIdade(idade){
    console.log(idade*365)
}
getIdade(25)

function funcionario(salario,horas){
    console.log('Salário igual a R$'+(horas*salario).toLocaleString('pt-BR'))
}
funcionario(20,220)

function nomeDoMes(numero){
    let data = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez']
    const mes = data[numero-1]
    console.log(mes)
}
console.log(nomeDoMes(2))

function maiorOuIgual(n1,n2){
    if(n1 > n2 || n1 === n2){
        console.log( true)
    }else{
        console.log( false)
    }
}
maiorOuIgual(5,7)
