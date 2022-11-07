const { table } = require('console');
const fs = require('fs');

console.clear();
console.log('=================')
const num = 5;
console.log('   Tabla del 5   ')
console.log('=================')

let salida = '';

for (let i = 1; i < 11; i++) {
    salida +=`    ${num} + ${i} = ${num*i}\n`
}

console.log(salida)

fs.writeFile('tabla-5.txt', salida, (err)=>{
    if (err) throw err;

    console.log('Tabla 5 creada')
})