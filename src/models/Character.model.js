const { DataTypes } = require('sequelize')
// Importamos los DataTypes con los cuales vamos a definir los tipos
// de datos para las columnas de nuestras tablas

module.exports = (database) => {
  database.define(
    'Character',
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
      },
      gender: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.ENUM('Alive', 'Dead', 'Unknown'),
        defaultValue: 'Alive'
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      species: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  )
}
// La creamos como una funcion para que pueda ser llamda desde la
// configuracion de nuestro modulo database.js

// La funcion .define() es la que crea nuestra tabla en la BD a partir
// de nuestro modelo

// .define() Recibe el nombre de la tabla y un objeto con las
// definiciones de las columnas y tipos de datos que van a almacenar
// cada columna, asi como sus constraints

// NOTA: El campo timestamps : false, indica que no se guarden los campos
// de creacion y modificacion en nuestro registro
// 'createdAt' 'updatedAt'

// NOTA: El DataType.ENUM('valor1', 'valor2', 'valor3', 'etc')
// nos permite acotar los datos que pueden ser recibidos
