  

import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js"
import { Buscquedas } from "./models/busquedas.js";

console.log(process.env)

const main = async() =>{

    let opt;
 
    const busquedas = new Buscquedas();


    do {

        opt = await inquirerMenu();
        
        switch (opt) {
            case 1: //Busqueda
                //Mostrar lugar

                const termino = await leerInput(`Ciudad: `.yellow);
                await busquedas.ciudad(termino);
                // console.log(lugares);
                
                //Buscar los lugares
                //Selección de opción
                //Datos del clima
                //Mostrar resultados
                console.log(`\nInformación de la ciudad\n`.yellow);
                console.log(`Ciudad: `);
                console.log(`Lat: `);
                console.log(`Lng: `);
                console.log(`Temperatura: `);
                console.log(`Minima: `);
                console.log(`Maxima: `);
                break;
            case 2:
                console.log({opt})
                break;
            case 0:
                
                break;
        }
    
        if (opt !== 0 ) await pausa();
    

    } while (opt !== 0);
}

main();