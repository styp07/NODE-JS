const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // edad: 40,
    getNombre (){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;


function imprimeHeroe({nombre,apellido,poder, edad = 0}){
    // const {nombre,apellido,poder, edad = 0} = heroe;
    console.log(nombre,apellido,poder, edad);
}


// const {nombre,apellido,poder, edad = 0} = deadpool;

// console.log(nombre,apellido,poder, edad);


const heroes = ['Deadpool', 'Spiderman', 'Hulk'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [h1,,h3] = heroes;

console.log(h1,h3);