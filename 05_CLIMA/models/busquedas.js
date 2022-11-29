import axios, {isCancel, AxiosError} from 'axios'

class Buscquedas{
    historial = ['Tegusigalpa', 'Madrid', 'Bogota']

    constructor(){
        //TODO: leer DB si existe
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'language':'es',
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
            return resp.data.features.map(lugar =>({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));
             //Retornar los lugares               
        } catch (error) {
            return[];
        }

    }

}

export {Buscquedas};