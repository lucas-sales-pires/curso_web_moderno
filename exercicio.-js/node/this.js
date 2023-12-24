console.log('this === global : \n'+ (this === global)+'\n')
console.log('this === module : \n'+(this === module)+'\n')

console.log('this === module.exports : \n'+(this === module.exports)+'\n')
console.log('this === exports : \n'+(this === exports) +'\n')

function logThis() {
    console.log('Dentro de uma função...')
    console.log('this === exports : \n'+(this === exports) +'\n')
    console.log('this === module.exports : \n'+(this === module.exports)+'\n')
    console.log('this === global : \n'+ (this === global)+'\n')
}

logThis()
