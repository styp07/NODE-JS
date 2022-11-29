import inquirer from 'inquirer';
 
import colors from 'colors';
//import { Tarea } from '../models/tarea.js';
 
const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: 'Seleccione una opción',
    choices: [
      {
        value: 1,
        name: '1. Buscar ciudad' 
      },
      {
        value: 2,
        name: '2. Historial' 
      },
      {
        value: 0,
        name: '0. Salir'
      }
    ],
  },
];
 
const inquirerMenu = async () => {
  console.clear();
  console.log('==========================='.yellow);
  console.log('   Seleccione una opción'.yellow);
  console.log('===========================\n'.yellow);
 
  const {opcion} = await inquirer.prompt(preguntas);
 
  return opcion;
};

const pausa = async() =>{
  const question =[
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'Enter'.yellow} para continuar.`
    }
  ]

  console.log('\n');

  await inquirer.prompt(question);
}
 
const leerInput = async(message) =>{
  const question  =[
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value){
        if (value.lenght === 0) {
          return `Por favor ingrese un valor`
        }
        return true
      }

    }
  ]

  const {desc}= await inquirer.prompt(question);
  return desc;

}

const listarLugares = async(lugares = []) =>{
  const choices = lugares.map( (lugares, i)  => {
    const idx = `${i+1}.`.yellow

    return{
      value: lugares.id,
      name: `${idx} ${lugares.nombre}`
    }

  });

  choices.unshift({
    value: '0',
    name: '0. '.yellow + 'Cancelar'
  })

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Seleccione el lugar'.yellow,
      choices
    }
  ]

  const {id} = await inquirer.prompt(preguntas);
  return id

}

const mostrarListadoChecklist = async( tareas = [] ) => {

  const choices = tareas.map( (tarea, i) => {

      const idx = `${i + 1}.`.green;

      return {
          value: tarea.id,
          name:  `${ idx } ${ tarea.desc }`,
          checked: ( tarea.completadoEn ) ? true : false
      }
  });

  const pregunta = [
      {
          type: 'checkbox',
          name: 'ids',
          message: 'Selecciones',
          choices
      }
  ]

  const { ids } = await inquirer.prompt(pregunta);
  return ids;
}


const confirmar = async (message) =>{
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ];

  const {ok} = await inquirer.prompt(question);
  return ok
}

export { inquirerMenu, pausa, leerInput, listarLugares, confirmar, mostrarListadoChecklist };