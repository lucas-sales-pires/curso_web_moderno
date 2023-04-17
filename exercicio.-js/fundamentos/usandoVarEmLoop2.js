const lista =[]
for (var i = 0;i<10;i++){
    lista.push(function(){
        console.log(i)
    })
    
}
lista[2]()
lista[8]()
