const { Episode } = require('../../database/database')

const createEpisode = async (name) => {
  const newEpisode = await Episode.create({ name })
  return newEpisode
}

module.export = createEpisode
