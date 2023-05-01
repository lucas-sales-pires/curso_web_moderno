
let resposta = document.getElementById('res')
let pedra = document.getElementById('pedra')
let papel = document.getElementById('papel')
let tesoura = document.getElementById('tesoura')
let opcoes = document.getElementsByClassName('opcao')
let lista =['pedra','papel','tesoura']
let jogadaM = document.getElementById('jogadaM')


function gerarNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }
function JogadaM(){
    let indice =gerarNumeroAleatorio(0,2)
    let maquina = lista[indice]
    return maquina
}

function selecionado() {
    if(pedra.checked){
        resposta.innerHTML = ''
        resposta.innerHTML +='Você escolheu <strong>PEDRA</strong>'
        if(JogadaM() == 'tesoura'){
            resposta.innerHTML +=' E a Maquina escolheu <strong>TESOURA</strong>,<br> Você ganhou Parabéns !'
            jogadaMaq.src ='./imagens/tesoura.png' 


        }else if(JogadaM() == 'papel'){
            resposta.innerHTML +=' E a Maquina escolheu <strong>PAPEL</strong>,<br> Infelizmente você perdeu !'
            jogadaMaq.src ='./imagens/papel.png' 
  
        }else{
            resposta.innerHTML += ' <strong>EMPATE !</strong>'
            jogadaMaq.src ='./imagens/pedra.png' 
        }
    }else if(papel.checked){
        resposta.innerHTML = ''
        resposta.innerHTML += 'Você escolheu <strong>PAPEL</strong>'
        if(JogadaM() == 'tesoura'){
            resposta.innerHTML +=' E a maquina escolheu  <strong>TESOURA</strong> ,<br> Você infelizmente perdeu !'
            jogadaMaq.src ='./imagens/tesoura.png'
        }else if(JogadaM() == 'papel'){
            resposta.innerHTML +=' E a Maquina escolheu <strong>PAPEL</strong>,<br><strong>EMPATE</strong>'
            jogadaMaq.src ='./imagens/papel.png'
        }else{
            resposta.innerHTML +=' E a Maquina escolheu <strong>PEDRA</strong>,<br>Parabéns você ganhou !'
            jogadaMaq.src = './imagens/pedra.png'
        }
    }else if(tesoura.checked){
        resposta.innerHTML = ''
        resposta.innerHTML += 'Você escolheu <strong>TESOURA</strong>'
        if(JogadaM() == 'tesoura'){
            resposta.innerHTML +=' E a maquina escolheu  <strong>TESOURA</strong> ,<br> <strong>EMPATE</strong> !'
            jogadaMaq.src ='./imagens/tesoura.png'
        }else if(JogadaM() == 'papel'){
            resposta.innerHTML +=' E a Maquina escolheu <strong>PAPEL</strong>,<br>Parabéns ! Você ganhou !'
            jogadaMaq.src ='./imagens/papel.png'
        }else{
            resposta.innerHTML +=' E a Maquina escolheu <strong>PEDRA</strong>,<br>Infelimente você perdeu !'
            jogadaMaq.src = './imagens/pedra.png'
        }
        
    }
}

