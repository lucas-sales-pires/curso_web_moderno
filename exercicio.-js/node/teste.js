const _ = require('lodash')
const pessoas = [
    { nome: 'Alice', idade: 25 },
    { nome: 'Bob', idade: 30 },
    { nome: 'Charlie', idade: 25 }
  ];

const agrupadoPorIdade = _.groupBy(pessoas,'idade');
console.log(agrupadoPorIdade)
