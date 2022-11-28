import axios, {isCancel, AxiosError} from 'axios'
import * as dotenv from 'dotenv';// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

class Buscquedas{
    historial = ['Tegusigalpa', 'Madrid', 'Bogota']

    constructor(){
        //TODO: leer DB si existe
    }

    get paramsMapbox(){
        return {
            'language':'es',
            'access_token':'pk.eyJ1Ijoic3R5cDA3IiwiYSI6ImNsYXp5dG1wOTB5bXMzb205MHZkb2hiMmoifQ.joyzFmPgw1DgV0YFUICoDA',
            'limt': 5
        }
    }

    async ciudad(lugar = ''){
        //Petición HTTP

        try {

            const instace = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            })

            const resp = await instace.get(lugar.json,{
                headers:{
                    "accept-encoding": null
                }
            });
            console.log(resp.data);
            return []; //Retornar los lugares               
        } catch (error) {
            return[];
        }

    }

}

export {Buscquedas};