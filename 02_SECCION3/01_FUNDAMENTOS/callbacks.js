// setTimeout(() => {
//     console.log('Hola Mundo')
// }, 1000);


const getUsuarioById = (id, collback) =>{

    const user = {
        id,
        name: 'Jairo',
        edad: 18
    }

    setTimeout(() => {
        collback(user);
    }, 1500);


}


getUsuarioById(10, (user) =>{
    console.log(user.id);
    console.log(user.name.toUpperCase());
    console.log(user.edad);
})