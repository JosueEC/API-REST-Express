const { Episode } = require('../../database/database')

const createBulkEpisodes = async (episodes) => {
  const newEpisodes = await Episode.bulkCreat(episodes)
  return newEpisodes
}

module.export = createBulkEpisodes
