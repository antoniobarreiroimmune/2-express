let express = require('express')
let almacen = require('./almacen')

let app = express()
let cesta = [];


app.get('/departamento/:departamento', function (req, res) {
    res.send(printStock(req.params.departamento))
})

function printStock(dept) {
    let tabla = ""
    let indice = almacen.findIndex(e => e.nombre === dept)
    console.log(indice)
    if (indice >= 0) {
        almacen[indice].productos.forEach((producto) => tabla += `<tr><td>${producto.nombre}</td><td>${producto.precio}</td><td>${producto.stock}</td></tr>`)
        return `<h2>${almacen[indice].nombre}</h2><table><tr><th>nombre</th><th>precio</th><th>stock</th></tr>${tabla}</table>`
    } else {
        return `El departamento ${dept} no existe en nuestra tienda`
    }
}

app.get('/departamento/:nombre', function (req, res) {
    let tabla = ""
    almacen[0].productos.forEach((producto) => tabla += `<tr><td>${producto.nombre}</td><td>${producto.precio}</td><td>${producto.stock}</td></tr>`)
    res.send(`
        <h2>${almacen[0].nombre}</h2>
        <table>
            <tr>
                <th>nombre</th>
                <th>precio</th>
                <th>stock</th>
            </tr>
            ${tabla}
        </table>
    `)

})


app.get('/comprar/:nombre/:cantidad', function (req, res) {
    const nombreProducto = req.params.nombre;
    const cantidad = req.params.cantidad;

    const departamentoIndex = almacen.findIndex((dept) => dept.productos.some((prod) => prod.nombre === nombreProducto));

    if (departamentoIndex >= 0) {
        const producto = almacen[departamentoIndex].productos.find((prod) => prod.nombre === nombreProducto);
        if (producto.stock >= cantidad) {
            cesta.push({ nombre: nombreProducto, cantidad });
            producto.stock -= cantidad;
            res.send(`Producto ${nombreProducto} añadido a la cesta (${cantidad} unidades).`);
        } else {
            res.send(`No hay suficiente stock para ${nombreProducto}.`);
        }
    } else {
        res.send(`El producto ${nombreProducto} no existe en nuestros departamentos.`);
    }
});

app.get('/mostrar-cesta', function (req, res) {
    let tabla = '';
    cesta.forEach((item) => {
        tabla += `<tr><td>${item.nombre}</td><td>${item.cantidad}</td></tr>`;
    });
    res.send(`
        <h2>Cesta de Compra</h2>
        <table>
            <tr>
                <th>Nombre del Producto</th>
                <th>Cantidad</th>
            </tr>
            ${tabla}
        </table>
    `);
});

app.get('/confirmar-compra', function (req, res) {
    cesta = [];
    res.send('Compra confirmada  Cesta vaciada.');
});










app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))

} )


