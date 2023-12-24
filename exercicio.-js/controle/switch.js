const imprimirResultado = function(nota){
    try{
        if(typeof nota != "number"){
            throw new Error ("Deve ser número")
        }
    
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
    }catch(e){
        console.error(e.message)
    }
}
