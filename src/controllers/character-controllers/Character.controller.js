// En el archivo controllers de cada endpoint nosotros creamos las
// operaciones basicas de CRUD para este endpoint, esto puede variar
// segun el endpoint que estemos creando

// Estas funciones van a ser exportadas para que puedan ser usadas
// en su archivo .routes correspondiente

const findAllCharacters = require('./findAllCharacters')
const createCharacter = require('./createCharacter')
const findCharacterByID = require('./findCharacterByID')
const deleteCharacter = require('./deleteCharacter')

export const readAllCharacters = async (req, res) => {
  try {
    const { status } = req.query

    const characters = status
      ? await findAllCharacters({ status })
      : await findAllCharacters()

    res.status(200).json(characters)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// Sintaxis para un endpoint de tipo GEt que en este caso obtiene
// todos los personajes que se encuentren en la BD, findAllCharacters
// puede recibir parametros de busqueda, es por eso que se coloca el
// condicional para preguntar si llego certo parametro de busqueda y
// realizar la accion correspondiente, de lo contrario devuelve todos
// los personajes por defecto

export const createNewCharacter = async (req, res) => {
  try {
    const { name, gender, status, origin, species, episodes } = req.body
    const newCharacter = await createCharacter(
      {
        name,
        gender,
        status,
        origin,
        species,
        episodes
      })
    res.status(200).json(newCharacter)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// Sintaxis de un endpoint para una peticion POST que crea un nuevo
// Character en nuestra BD

export const readCharacterByID = async (req, res) => {
  try {
    const { id } = req.params

    const character = await findCharacterByID(id)
    res.status(200).json(character)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// Esta es la sintaxis de un endpoint al cual llega una peticion de tipo
// get, en la propiedad params viene un id por lo que se require
// obtener un personaje mediante el ID

export const updateCharacterByID = (req, res) => {
  res.status(200).json('Update Character by ID')
}

export const deleteCharacterByID = async (req, res) => {
  try {
    const { id } = req.params
    const deletedCharacter = await deleteCharacter(id)
    res.status(200).json(deletedCharacter)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
// Sintaxis para una peticion DELETE, en este caso elimina un
// character de la BD en base a su ID y lo retorna
