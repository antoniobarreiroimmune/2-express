const express = require('express');
const app = express();


const nombres = ['Diego', 'Roy', 'Fran', 'Mauro', 'Jose'];

app.get('/persona', (req, res) => {
    res.send(nombres);
});

app.get('/persona/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < nombres.length) {
        res.send(nombres[index]);
    } else {
        res.send('Persona no encontrada');
    }
});

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )