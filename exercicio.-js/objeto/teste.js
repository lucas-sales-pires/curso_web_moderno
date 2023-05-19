function horarioAtual() {
    let dataAtual = new Date(); //variável recebe a data atual
    let hora = dataAtual.toLocaleTimeString(); // variável recebe a data atual convertida para hora atual
    console.log(hora); //hora será mostrada no console
  }
  setTimeout(horarioAtual, 3000);
  horarioAtual()
