function pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    },100)
}
new pessoa 
