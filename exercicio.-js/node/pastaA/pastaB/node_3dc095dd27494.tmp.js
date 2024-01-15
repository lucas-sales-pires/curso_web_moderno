const modulaA = require('../../moduloA')
console.log(modulaA)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const C = require('./pastaC/index')
console.log(C.ola2)


const http = require('http')
http.createServer((req,res) => {
    res.write('Bom dia !')
    res.end()
}).listen(3036)
