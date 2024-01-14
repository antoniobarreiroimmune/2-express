const express = require('express');
const saludarEnExpress = require('./funcion');

const app = express();
const port = 3000;

app.get('/saludar', (req, res) => {
    res.send(saludarEnExpress());
});

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )
