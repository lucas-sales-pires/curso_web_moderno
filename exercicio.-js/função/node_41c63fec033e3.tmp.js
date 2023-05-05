var intervalId = setInterval(function() {
    console.log("Mensagem exibida a cada 5 segundos.");
  }, 5000);
  
  setTimeout(function() {
    clearInterval(intervalId);
  }, 30000);
console.log(intervalId)  