function Carros(velocidadeMaxima = 200,delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo público
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo público
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}
const uno = new Carros
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carros(350,20)
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())
