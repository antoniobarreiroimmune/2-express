const express = require('express');
const app = express();

const zeroArray = require('./numeros');
const getRandomNumber = require('./funcion');

app.get('/', (req, res) => {
    const randomIndex = getRandomNumber();
    zeroArray[randomIndex]++;
    res.send(zeroArray);
});

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )
