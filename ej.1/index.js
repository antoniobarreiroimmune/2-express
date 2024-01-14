const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {

    res.send('<h1>hola mundo</h1> <h2>desde express</h2>');
});


app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )
