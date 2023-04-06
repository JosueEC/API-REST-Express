// En el archivo controllers de cada endpoint nosotros creamos las
// operaciones basicas de CRUD para este endpoint, esto puede variar
// segun el endpoint que estemos creando

// Estas funciones van a ser exportadas para que puedan ser usadas
// en su archivo .routes correspondiente

const findAllEpisodes = require('./findAllEpisodes')

const createBulkEpisodes = require('./createBulkEpisodes')
const createEpisode = require('./createEpisode')
// const findEpisode = require('./findEpisode')
// const deleteEpisode = require('./deleteEpisode')

const readAllEpisodes = async (req, res) => {
  try {
    const episodes = await findAllEpisodes()
    res.status(200).json(episodes)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const createNewBulkEpisodes = async (req, res) => {
  try {
    const { episodes } = req.body
    const created = await createBulkEpisodes(episodes)
    res.status(200).json(created)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const createNewEpisode = async (req, res) => {
  try {
    const { name } = req.bdoy
    const newEpisode = await createEpisode(name)
    res.status(200).json(newEpisode)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const findEpisodeByID = async (req, res) => {
  res.json('fin Episode by ID')
}

const deleteEpisodeByID = async (req, res) => {
  res.json('delete Episode by ID')
}

module.export = {
  readAllEpisodes,
  createNewEpisode,
  createNewBulkEpisodes,
  findEpisodeByID,
  deleteEpisodeByID
}
