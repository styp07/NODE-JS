import fs from 'fs';

const archivo = './database/data.json'

const guardarDB = (data) =>{    
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = ()=>{
    if (!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8'});

    return JSON.parse(info);
}

export {guardarDB, leerDB};