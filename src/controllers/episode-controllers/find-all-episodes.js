const { Episode } = require('../../database/database')

const findAllEpisodes = async () => {
  const episodes = await Episode.findAll()
  return episodes
}

module.export = findAllEpisodes
