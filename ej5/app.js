const express = require('express');
const app = express();

const PORT = 3000;

const persona = {
    nombre: 'Diego',
    apellidos: 'Tristan',
    edad: 48
};

app.get('/cambiar-nombre/:nombre', (req, res) => {
    persona.nombre = req.params.nombre;
    res.send(`Nombre actualizado a: ${persona.nombre}`);
});

app.get('/cambiar-apellidos/:apellidos', (req, res) => {
    persona.apellidos = req.params.apellidos;
    res.send(`Apellidos actualizados a: ${persona.apellidos}`);
});

app.get('/cambiar-edad/:edad', (req, res) => {
    persona.edad = req.params.edad;
    res.send(`Edad actualizada a: ${persona.edad}`);
});

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )