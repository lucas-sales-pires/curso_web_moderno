const schedule = require("node-schedule");

// Tarefa 1 - a cada 5 minutos às 4:00 AM de segunda a sexta-feira
const tarefa1 = schedule.scheduleJob("*/5 * 4 * 1-5", function() {
    console.log("Executando Tarefa 1!", new Date().getSeconds());
});

// Cancelar a Tarefa 1 após 20 segundos
setTimeout(function() {
    tarefa1.cancel();
    console.log("Cancelando Tarefa 1!");
}, 20000);

// Tarefa 2 - às 4:30 AM de segunda a sexta-feira
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [1, 2, 3, 4, 5]; // Segunda a Sexta-feira
regra.hour = 4;
regra.minute = 30;


const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log("Executando Tarefa 2!", new Date().getSeconds());
});
