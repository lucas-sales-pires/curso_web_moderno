class Pessoa {
  constructor(nome, idade, sexo) {
     this.nome = nome;
     this.idade = idade;
     this.sexo = sexo;
  }
}

class Matheus extends Pessoa {
  constructor(nomeDiferente, algumaIdade, meuSobrenome) {
     super(nomeDiferente, algumaIdade); 
     this.sobrenome = meuSobrenome;
  }
}
pessoa1 = new Pessoa('lucas',25,'M')
pessoa2 = new Matheus('Julio',30,'Sales')
pessoa2.sexo='M'
console.log(pessoa1)

console.log(pessoa2)
