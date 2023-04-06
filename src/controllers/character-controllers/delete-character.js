const { Character } = require('../../database/database')

const deleteCharacter = async (id) => {
  const character = await Character.findByPk(id)
  const aux = { ...character }
  await character.destroy()
  return aux
}

module.export = deleteCharacter
