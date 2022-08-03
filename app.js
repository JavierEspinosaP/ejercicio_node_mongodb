
//Primero siempre módulos externos
const express = require('express')
require('./utils/dbMongo.js'); // Abrir conexión a la BBDD Mongo


const emoji = require('emoji-whale')
const cowsay = require('cowsay2');
const owl = require('cowsay2/cows/owl');

//Rutas de productos
const productsApiRouter = require('./routes/productsApiRoutes')


// Tu middleware
const manage404 = require('./middlewares/error404')

const app = express()
const port = 3005

//Permite leer body recibido en una petición
app.use(express.json())


//API
app.use('/api/products', productsApiRouter)


//Middleware error 404
// Respuesta por defecto para rutas no existentes
app.use(manage404);


app.listen(port, () => {
  console.log(cowsay.say(`Mi servidor funciona en http://localhost:${port}`, { cow: owl }))
});