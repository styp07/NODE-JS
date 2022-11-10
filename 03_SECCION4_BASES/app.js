const {crearArchivo} = require('./hellpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
// console.log(argv)
// console.log('base: yargs', argv.b)

// const [,,arg3 = 'base=5'] = process.argv;
// const[,base = 5] = arg3.split('=');

// console.log(argv.b)
crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creada'.gray))
    .catch( err => console.log(err));