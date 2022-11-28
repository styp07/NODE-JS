import axios, {isCancel, AxiosError} from 'axios'
import * as dotenv from 'dotenv';// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

class Buscquedas{
    historial = ['Tegusigalpa', 'Madrid', 'Bogota']

    constructor(){
        //TODO: leer DB si existe
    }

    async ciudad(lugar = ''){
        //Petición HTTP
        const resp = await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp.data);
        return []; //Retornar los lugares   
    }

}

export {Buscquedas};