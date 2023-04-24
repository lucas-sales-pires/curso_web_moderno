String.prototype.palindrome  = function(){
    var textoinvertido = this.split("").reverse().join("")
    return this == textoinvertido
}
var meutexto ='arara'
console.log(meutexto.palindrome())

