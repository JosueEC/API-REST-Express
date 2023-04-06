const { Character } = require('../../database/database')

const createCharacter = async (data) => {
  const { name, gender, status, origin, species, episodes } = data

  const newCharacter = await Character.create(
    {
      name,
      gender,
      status,
      origin,
      species
    }
  )

  newCharacter.addEpisodes(episodes)
  return newCharacter
}

module.export = createCharacter
