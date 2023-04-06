const { DataTypes } = require('sequelize')
// Importamos los DataTypes para poder definir el tipo de dato de las
// columnas de nuestro modelo

module.exports = (database) => {
  database.define(
    'Episode',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  )
}
// Creamos nuestro modelo con sus columnas y las restricciones y reglas
// para cada una de ellas
