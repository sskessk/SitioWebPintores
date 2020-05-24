//Importamos la libreria express
const express = require('express');
//Generar un objeto con express
const app = express();
//Vamos a especificar un directorio publico
app.use(express.static(__dirname + '/public'));
//Vamos a arrancar el serivdor
app.listen(3000, ()=>{
console.log('Escuchando el puerto tcp 3000')
});
