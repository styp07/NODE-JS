import * as dotenv from 'dotenv';// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();  

import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js"
import { Buscquedas } from "./models/busquedas.js";

//console.log(process.env.MAPBOX_KEY);

const main = async() =>{

    let opt;
 
    const busquedas = new Buscquedas();


    do {

        opt = await inquirerMenu();
        
        switch (opt) {
            case 1: //Busqueda
                //Mostrar lugar

                const termino = await leerInput(`Ciudad: `.yellow);
                
                // console.log(lugares);

                const lugares = await busquedas.ciudad(termino);
                
                //Buscar los lugares

                const idSelec = await listarLugares(lugares);

                const lugarSelec = lugares.find(l => l.id === idSelec);

                //Selección de opción
                //Datos del clima
                //Mostrar resultados
                console.log(`\nInformación de la ciudad\n`.yellow);
                console.log(`Ciudad: ${lugarSelec.nombre}`);
                console.log(`Lat: ${lugarSelec.lat}`);
                console.log(`Lng: ${lugarSelec.lng}`);
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