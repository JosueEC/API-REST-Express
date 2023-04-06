const express = require('express')
// Importamos nuestro modulo de express
const morgan = require('morgan')
// Importamos nuestro middelware morgan

const characterRoutes = require('./routes/characters.routes')
const episodeRoutes = require('./routes/episode.routes')
// Importamos los modulos donde tenemos las rutas de nuestros endpoints

const server = express()
// Creamos una instancia con la que vamos a acceder a las funciones
// de express

server.use(express.json())
// Este es un middelware que convierte los body de las peticiones
// a archivos json para que sea mas facil trabajar con ellos

server.use(morgan('dev'))
// Morgan es un middelware que nos devuelve mas informacion sobre cada
// una de las peticiones que llegan a nuestro servidor. La informacion
// que devuelve varia dependiendo del parametro que se le pase

server.use('/character', characterRoutes)

server.use('/episode', episodeRoutes)

module.exports = server
// Exportamos nuestra instancia para poder ser usada en el index.js
// y nos permita poner a escuchar peticiones a nuestro servidor
