let lista =['Agatha','Aldo','Daniel','Raquel']
lista.forEach((nome,indice) => {
    console.log(`${indice+1} ${nome}` )
});
const exibirAprovados = aprovado => console.log(aprovado)
lista.forEach(exibirAprovados)
