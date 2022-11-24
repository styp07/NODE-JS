import { Tarea } from "./tarea.js";
import  Colors  from "colors";

class Tareas{
    
    _listado = {};

    get _listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea)
        })
        
        return listado;
    } 

    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []){

        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea
        })

    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    borrarTarea( id = '' ) {

        if ( this._listado[id] ) {
            delete this._listado[id];
        }

    }

    listadoCompleto(){

        this._listadoArr.forEach((tarea, i) =>{
            const idx = `${i+1}`.yellow;
            const{desc, completadoEn} = tarea;
            const estado = (completadoEn)
                                ? 'Completada.'.yellow
                                : 'Pendiente'.red

            console.log(`${idx}. ${desc} ${'|'.yellow} ${estado}`)
        });
    }

    listarPendientesCompletadas( completadas = true){

        let contador = 0
        this._listadoArr.forEach((tarea, i) =>{

            const{desc, completadoEn} = tarea;
            const estado = (completadoEn)
                                ? 'Completada.'.yellow
                                : 'Pendiente'.red

            if (completadas) {
                if (completadoEn) {
                    contador++;
                    console.log(`${contador.toString().yellow}${'.'.yellow} ${desc} ${'|'.yellow} Completado el: ${completadoEn.toString().yellow}`)
                }   
            }
            else{
                if (!completadoEn) {
                    contador++;
                    console.log(`${contador.toString().yellow}${'.'.yellow} ${desc} ${'|'.yellow} ${estado}`)
                }   
            }
        });
    }

    toggleCompletados( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id];
            if ( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString()
            }

        });

        this._listadoArr.forEach( tarea => {

            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null;
            }

        });


    }

}

export {Tareas};    