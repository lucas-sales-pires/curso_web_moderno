let data1 = new Date().getDay()
let data2 = new Date().getDay()
let resultado = (data1.getTime() - data2.getTime())/(24*3600)
console.log(resultado)
