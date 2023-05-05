const readline = require('readline');

class Computador {
    constructor(nome, modelo) {
        this.nome = nome;
        this.modelo = modelo;
        this.lista = [];
        this.ligar = function() {
            console.log('ligando..');
        }
    }
    
    adicionar_item(item) {
        this.lista.push(item);
    }
}

const computador_sala = new Computador('pc', 'intel');
computador_sala.adicionar_item('mouse');
console.log(computador_sala.lista);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedir_entrada() {
    rl.question('Digite o equipamento: ', (input) => {
        if (computador_sala.lista.length < 10) {
            computador_sala.adicionar_item(input);
            pedir_entrada();
        } else {
            console.log('Lista cheia!');
            rl.close();
        }
    });
}

pedir_entrada();
