const fs = require('fs');
const colors = require('colors')

const crearArchivo = async(base = 5, listar, hasta = 10) => {

    try {
    
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            consola +=`    ${base} ${'*'.yellow} ${i} ${'='.yellow} ${base*i}\n`
            salida +=`    ${base} * ${i} = ${base*i}\n`
        }
    
        if (listar == true) {
            console.clear();
            console.log('================='.yellow)
            console.log(`   ${'Tabla del'.gray} ${colors.yellow(base)}   `)
            console.log('================='.yellow)
            console.log(consola)
        } 
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return colors.brightYellow(`Tabla-${base}.txt`);   
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}