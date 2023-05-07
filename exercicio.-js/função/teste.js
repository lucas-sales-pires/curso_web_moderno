lista = ['lucas','fatima','diego','miguel']

function organiza(nome,indice){
    console.log(`${indice+1}. ${nome}`)
}
organiza(lista)

lista.forEach(organiza)
