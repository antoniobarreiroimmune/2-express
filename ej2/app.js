const express = require('express');
const app = express();


app.get('/random/:num', (req, res) => {
    const Num = req.params.num;

    //Número válido
    if (isNaN(Num) || Num < 1) {
        return res.send('El parámetro debe ser un número mayor que 0.');
    }

   
    const randomNumber = Math.floor(Math.random() * Num) + 1;

   
    res.send(`Número aleatorio: ${randomNumber}`);
});


app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )
