function removerPropriedade(a,b){
    let objeto = Object.assign({},a)
    delete objeto[b]
    console.log(objeto)
}

removerPropriedade({a:20,b:50,c:70},"b")
