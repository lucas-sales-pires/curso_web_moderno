const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite seu nome: ', (nome) => {
    console.log(`Olá, ${nome}!`);
    readline.close();
  });
  