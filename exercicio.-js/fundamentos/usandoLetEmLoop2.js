const lista = []
for(let i=0;i<10;i++){
    lista.push(function(){
        console.log(i)
    })
}
lista[8]()
lista[2]()
