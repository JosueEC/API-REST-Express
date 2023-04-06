import { Router } from 'express'
// Importamos el modulo Router, el cual nos va a permitir crear rutas
// o endpoints para las solicitudes que llegan al servidor

import * as characterController from '../controllers/character-controllers/Character.controller'
// Esta es una forma en la que podemos importar todas las funciones
// del respectivo controller de esta ruta o endpoint, de esta forma
// podemos acceder a ellas como objeto o tambien podriamos importarlas
// una por una

const router = Router()
// Creamos una instancia del modulo Router para poder usar sus funciones

// ENDPOINTS PARA /character
router.get('/', characterController.readAllCharacters)
// Read - Leer

router.post('/', characterController.createNewCharacter)
// create - crear

router.get('/:characterID', characterController.readCharacterByID)
// Read by ID - Leer por ID

router.put('/:characterID', characterController.updateCharacterByID)
// Update by ID - Actualizar por ID

router.delete('/:characterID', characterController.deleteCharacterByID)
// Delete by ID - Borrar por ID

// De esta forma es como usamos todas las funciones basicas de un
// CRUD en nuestro servidor, en este caso solo en el endpoint de
// products

module.export = router
