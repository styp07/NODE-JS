import colors from 'colors';
import { guardarDB, leerDB} from './helpers/guardarArchivo.js';
import { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } from './helpers/inquirer.js';
import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';

console.clear();

const main = async () => {

  let opt = '';

  const tareas = new Tareas();

  const tareasDB = leerDB();

  if ( tareasDB ) { // cargar tareas
    tareas.cargarTareasFromArray(tareasDB)
  //     tareas.cargarTareasFromArray( tareasDB );
  }

  await pausa();

  do {
    // Imprime el menu
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
          const desc = await leerInput('Descripción: ');
          tareas.crearTarea(desc);
        break;
      case '2':
          tareas.listadoCompleto();
        break;
      case '3':
        tareas.listarPendientesCompletadas();
        break;
      case '4':
        tareas.listarPendientesCompletadas(false);
        break;
      case '5':
        const ids = await mostrarListadoChecklist(tareas._listadoArr);
        tareas.toggleCompletados(ids);
        break;
      case '6':
        const id = await listadoTareasBorrar(tareas._listadoArr);
        if (id !== '0'){
          const ok = await confirmar(`¿Estas seguro que deseas eliminar esto para siempre?`.red)
          if(ok ){
            tareas.borrarTarea(id);
            console.log('Tarea borrada correctamente'.yellow)
          }
        }
        break;
      case '0':

        break;
    }

    guardarDB(tareas._listadoArr);

    await pausa();

  } while (opt !== '0');

};

main();