const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const funcionarios = data;
    let menor = Number.MAX_VALUE;
    let funcionarioMenorSalario;

    funcionarios.forEach(f => {
      if (f.salario < menor) {
        menor = f.salario;
        funcionarioMenorSalario = f;
      }
    });

    console.log('Employee with the lowest salary:', funcionarioMenorSalario);
  })
  .catch(error => {
    console.error('Error:', error);
  });
