const { Character, Episode } = require('../../database/database')

const findCharacter = async (id) => {
  const character = await Character.findByPk(id,
    {
      include: {
        model: Episode,
        attributes: ['name'],
        thrpugh: {
          attributes: []
        }
      }
    }
  )
  if (!character) throw Error('El personaje no existe')
  return character
}

module.export = findCharacter
