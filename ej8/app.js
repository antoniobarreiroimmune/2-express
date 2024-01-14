const express = require('express');
const app = express();

const zeroArray = require('./numeros');
const getRandomNumber = require('./funcion');

app.get('/', (req, res) => {
    const randomIndex = getRandomNumber();
    zeroArray[randomIndex]++;
    res.send(zeroArray);
});

app.get('/borrar/:numero', (req, res) => {
    const index = Number(req.params.numero);

    // Comprobar si está dentro del rango
    if (index >= 0 && index < zeroArray.length) {
        zeroArray[index] = 0;
        res.send(`Índice ${index} reseteado a cero.`);
    } else {
        res.send('Error');
    }
});

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )


