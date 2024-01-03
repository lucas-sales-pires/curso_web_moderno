function contarCaracteres(letra, string) {
    let contador = 0;
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letra) {
            contador += 1;
        }
    }
    
    console.log(contador);
}

contarCaracteres("s", "A sorte favorece os audazes");
contarCaracteres("c","Conhece")
