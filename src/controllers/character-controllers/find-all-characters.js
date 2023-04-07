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

// La propiedad where: query trae datos que vienen en la peticion
// con estos datos se realizan filtros en nuestra busqueda
// include: Es el equivalente al join de SQl en sequelize, con esta
// propiedad estamos indicando que en el resultado que nos devuelve
// nuestra busqueda, queremos que se incluyan los datos del modelo
// Episode que tenga asociado
// attributes: Con esta propiedad establecemos que columnas queremos
// que se retornen en el resultado, esto es en el caso de que solo
// queremos ciertos datos de el o los registros que estamos pidiendo
