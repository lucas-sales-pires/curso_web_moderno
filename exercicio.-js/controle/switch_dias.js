let dataAtual = new Date();
let diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaDaSemana = diasDaSemana[dataAtual.getDay()]; 

switch(diaDaSemana) {
  case "Segunda":
    console.log("Hoje é segunda-feira");
    break;
  case "Terça":
    console.log("Hoje é terça-feira");
    break;
  case "Quarta":
    console.log("Hoje é quarta-feira");
    break;
  case "Quinta":
    console.log("Hoje é quinta-feira");
    break;
  case "Sexta":
    console.log("Hoje é sexta-feira");
    break;
  case "Sábado":
    console.log("Hoje é sábado");
    break;
  case "Domingo":
    console.log("Hoje é domingo");
    break;
  default:
    console.log("Dia da semana inválido");
    break;
}
