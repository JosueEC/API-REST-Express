require('dotenv').config()
// De esta forma es como importamos las variables de entorno que
// vamos a utilizar

const { USER, PASSWORD, HOST, PORT, NAMEBD } = process.env
// Desestructuramos las variables de entorno, las cuales vienen
// en el objeto procces en su propiedad .env

const { Sequelize } = require('sequelize')
// Importamos la clase Sequelize para poder crear una instancia de
// la misma

const createTableCharacters = require('./models/Character')
const createTableEpisodes = require('./models/Episode')
// Importamos los modelos que vamos a crear en la carptea models,
// estos se crearon como una funcion que recibe la database para
// poder usar su propiedad .define y asi poder crear nuestras tablas
// a partir de los modelos

const database = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${NAMEBD}`,
  { logging: false }
)
// En la instancia de la clase de Sequelize es donde creamos la
// conexion con la BD, esta es una sintaxis en la que le pasamos
// a la instancia los datos a traves de URI
// El loggin: false es para quitar toda la salida de la consola
// que aparece cuando sequelize crea o altera las tablas de nuestra
// BD cada que esta se sincroniza

// // Esta sintaxis es en la que pasamos los parametros a la instancia
// // de forma separada, puedes usar cualquiera de las dos
// const sequelize = new Sequelize(NAMEBD, USER, PASSWORD, {
//   host: HOST,
//   dialect: 'postgres'
// })
// // Mandamos los parametros necesarios para crear la conexion con
// // la BD
// // 'projectsDB' --> Nombre de la Base de Datos Creada
// // 'postgres' -->Nombre de usuario (este esta por defecto o se puede
// // editar en DBeaver)
// // 'admin' -->Contraseña para acceder a la BD

// // host: 'localhost' --> Host o dominio en el que esta la BD
// // dialect: 'postgres' --> Base de datos que estamos usando

createTableCharacters(database)
createTableEpisodes(database)
// Aqui ponemos la logica que crea las tablas a partir de los modelos
// es por eso que le pasamos la database para que pueda usar su funcion
// .define

const { Character, Episode } = database.models
// Ahora importamos los modelos para poder crear las relaciones entre
// las tablas

Character.belongsToMany(Episode, { through: 'CharacterEpisode' })
// Esto se lee como 'Un Characters pertenece a muchos Episode'
// Relacion 1 to n
Episode.belongsToMany(Character, { through: 'CharacterEpisode' })
// De igual forma esto es 'Un epidose pertenece o muchos Character'
// Relacion 1 to n

module.exports = {
  database,
  ...database.models
}
