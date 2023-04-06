const server = require('./src/server')
// Importamos el servidor que creamos en server.js
const { database } = require('./src/database')
// Importamos la instancia de nuestra BD que creamos en el modulo
// database.js, la cual tiene la logica para conectarnos con nuestra
// Base de Datos

database
  .sync({ alter: true })
  .then(() => {
    server.listen('3001', () => {
      console.log('Server listening on port: ', 3001)
    })
  })
  .catch((err) => console.log(err))
// Esta es la configuracion que sincroniza con la BD y nuestro servidor
// .sync() devuelve una promesa, esta se encarga de sincronizar la BD
// debemos manejar esta promesa con .then()
// .then() Aqui es donde nosotros levantamos el servidor una
// vez que se ha conectado la BD, en caso de que algo falle
// capturamos el error con catch
