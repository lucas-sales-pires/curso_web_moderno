let computador = {}
computador["Placa de Vídeo"] = 'RTX 3080 TI'
computador["Placa Mãe"] = 'A520M'
computador["Memoria Ram"] = '16gb ddr4'

for(i in computador){
    console.log(i,computador[i])
}

let computador2 = []
computador2['placa de video'] = 'RTX 3090 TI'
computador2['Placa mãe'] = 'Asus H321M'
computador2['Memoria Ram'] = '32gb ddr5'

for (j in computador2){
    console.log(j,computador2[j])
}
class Computadores {
    constructor(nome, marca, preco) {
      this.nome = nome;
      this.marca = marca;
      this.preco = preco;
    }
  
  }
  
const pc1 = new Computadores('Lucas', 'Dell', 3000);
console.log(pc1); 

const pc2 = new Computadores('Fátima','Positivo',1500)
console.log(pc2)

if(pc1.preco < pc2.preco){
    console.log(`O computador do(a) ${pc1.nome} é mais barato`)
}
if(pc1.preco > pc2.preco){
    console.log(`O computador do(a) ${pc1.nome} é mais caro`)
}
const pc3 = new Computadores('Diego','Asus',2500)
console.log(pc3)

class camisas{
    constructor(tipo,pano,tamanho){
        this.tipo = tipo;
        this.pano = pano;
        this.tamanho = tamanho;
    }
}
camisa_lucas = new camisas('regata','fino','G')
console.log(camisa_lucas)

class carro{
    constructor(cor,modelo,ano){
        this.cor = cor
        this.modelo = modelo
        this.ano = ano
    }
}
const carro1 = new carro('preto','Citroen',2006)
console.log(carro1)



const randomico = function(minimo,maximo){
    const min = minimo 
    const max = maximo 
    const resultado = Math.random()* (max - min) +min
    return Math.floor(resultado)

}
let lista = ['pedra','papel','tesoura']
let maquina =lista.slice()

let jogo = function (opcao){
    let indice = Math.floor(Math.random() * lista.length)
    if(opcao == maquina[indice]){
        console.log('Empate')
    }else if (opcao == 'pedra' && maquina[indice] == 'papel'){
        console.log('Voce perdeu, jogou pedra e a maquina papel')
    }else if (opcao == 'pedra'  && maquina[indice] == 'tesoura'){
        console.log('Voce ganhou, jogou pedra e a maquina tesoura ')
}
}
jogo('pedra')
