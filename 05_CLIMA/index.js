import * as dotenv from 'dotenv';// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();  

import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer.js"
import { Busquedas } from "./models/busquedas.js";

//console.log(process.env.MAPBOX_KEY);

const main = async() =>{

    let opt;
 
    const busquedas = new Busquedas();


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
                if (idSelec === '0');

                //

                const lugarSelec = lugares.find(l => l.id === idSelec);

                const climaLugar = await busquedas.climaLugar( lugarSelec.lat, lugarSelec.lng );

                busquedas.agregarHistorial(lugarSelec.nombre);

                //Selección de opción
                //Datos del clima
                //Mostrar resultados
                console.clear();
                console.log(`\nInformación de la ciudad\n`.yellow);
                console.log(`Ciudad: ${lugarSelec.nombre}`);
                console.log(`Lat: ${lugarSelec.lat}`);
                console.log(`Lng: ${lugarSelec.lng}`);
                console.log(`Temperatura: ${climaLugar.temp}`);
                console.log(`Minima: ${climaLugar.min}`);
                console.log(`Maxima: ${climaLugar.max}`);
                console.log(`¿Como esta el clima?: ${climaLugar.desc}`)
                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar,i) =>{
                    const idx = `${i+1}`.yellow
                    console.log(`${idx} ${lugar}`)
                })
                break;
            case 0:
                
                break;
        }
    
        if (opt !== 0 ) await pausa();
    

    } while (opt !== 0);
}

main();