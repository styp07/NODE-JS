import http from 'http';

http.createServer((req, res) =>{

    console.log(req);

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre\n');
    res.write('1, Jairo\n');
    res.write('2, Tomas\n');
    res.write('3, Karla\n');
    res.write('4, Styp\n');

    res.end();

})

.listen( 8080 );

console.log('Escuchando el puerto ', 8080)