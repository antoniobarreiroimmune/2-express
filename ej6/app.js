const express = require('express');
const app = express();

let nombres = ['Carlos', 'Ester', 'Gloria', 'Jose', 'Maria', 'Marina', 'Mildry', 'Nuria', 'Santi', 'Victor', 'Antonio'];

app.get('/add/:nombre', (req, res) => {
    nombres.push(req.params.nombre);
    res.send(`Nombre añadido: ${req.params.nombre}`);
});

app.get('/nombres', (req, res) => {
    res.send(nombres);
});

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )