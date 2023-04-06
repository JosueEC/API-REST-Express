const { Character, Episode } = require('../../database/database')

const findAllCharacters = async (query) => {
  const characters = await Character.findAll(
    {
      where: query,

      include: {
        model: Episode,
        attributes: ['name'],
        through: {
          attributes: []
        }
      }
    }
  )

  return characters
}

module.export = findAllCharacters
