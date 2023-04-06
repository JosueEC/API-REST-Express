// EN ESTA DEMO TENEMOS UNA GUIA DE UN PROYECTO BASICO DE BACKEND
// ES UNA API BASICA QUE USA EL ORM DE SEQUELIZE Y SE CONECTA CON
// UNA BD DE POSTGRESQL

// ORM: (Object Relational Mapping)
// Es una herramienta que se utiliza para mapear objetos de un
// lenguaje de programacion a tablas de una base de datos relacional
// Esto permite que los desarrolladores interactuen con la BD usando
// codigo en lugar de consultas SQL directas

// 1.-Creamos nuestra carpeta para el proyecto Backend
// 2.-Creamos nuestro package.json
/*  npm init -yes */
// 2.-Agregamos nuestra configuracion para el esLint (Opcional)
/*  npm install standard -D */
// 2.-Y agregamos la eslintConfig al package.json(Opcional)
/*
"eslintConfig": {
  "extends": "./node_modules/standard/eslintrc.json"
} */
// 3.-Instalamos las dependencias de Produccion
/*  npm install express morgan sequelize pg pg-hstore dotenv */
// 4.-Instalamos las dependencias de Desarrollo
/*  npm install nodemon -D */
// 5.- Creamos nuestro archivo de entrada index.js
/*  index.js */
// 6.-Agregamos nuestro script de ejecucion del servidor en el
// archivo package.json
/*  "dev": "nodemon index.js" */

// 7.-Creamos nuestra carpeta src
/*  mkdir src */
// 8.-Dentro de src creamos la estructura de carpetas basica para nuestro proyecto
/*  mkdir database routes controllers models */
// -->database: Configuracion para la conexion con la BD (PostgreSQL)
// -->routes: Rutas o Endpoints a los que llegaran las solicitudes HTTP
// -->controlles: Logica de CRUD que realizara acciones en nuestra BD
// -->models: Estructura de las tablas que se van a crear en la BD

// VAMOS A CREAR NUESTRO REPOSITORIO EN GITHUB PARA SUBIR ESTE PROYECTO
// 0.-Creamos un nuevo repositorio en GitHub, hay que considerar si este
// repo va a almacenar varios proyectos o solo 1
// 1.-Creamos nuestro archivo .gitignore para especificar los archivos
// que no vamos a querer que se suaban a github
/*  .gitignore */
// 2.-Ubicados en la carptea raiz abrimos una terminal y ejecutamos
/*  git init */
// Esto indica que esta carptea ahora es un repositorio de github
// 3.-Agregamos al .gitignore todos los archivos que queremos que se
// ignoren cuando subimos cambios a github
/*
/node_modules
/.env
*/
// 4.-Ejecutamos los comandos que aparecen cuando creamos nuestro repo
// vacio en GitHub y ya estaria creado nuestro repo
/*
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/JosueEC/EXAMPLES-API-REST-NODEJS.git
git push -u origin main
*/

// EMPEZAMOS CREANDO LA CONFIGURACION DEL SERVIDOR
// 8.-Dentro de src creamos nuestro archivo server, el cual contendra
// toda la configuracion de nuestro server
/*  server.js o app.js */
// Contiene toda la configuracion de nuestro servidor
// -Middelwares basicos por los que debe pasar la peticion HTTP
// -Rutas o endpoints generales que se colocan como middelwares los
//  cuales envian la peticion hacia el endpoint que buscan y una vez
//  que lo encuentra ejecuta su controlador correspondiente

// AHORA CREAMOS LA CONFIGURACION DE NUESTRA BASE DE DATOS
// 9.-Creamos nuestro archivo .env en donde crearemos nuestras
// variables de entorno y poder exportarlas para poder usarlas
// donde las necesitemos
/*  .env */
// Dentro iran las siguientes variables de entorno:
/*
USER=postgres // usario registrado en postgres
PASSWORD=admin // contraseña regustrada en postgres
HOST=localhost // host o dominio donde esta nuestra BD
PORT=5432 // Puerto por donde nuestra BD esta a la escucha de peticiones
BDD=sequelize // Nombre de la BD a la que nos vamos a conectar
*/
// 10.-Dentro de la carpeta database creamos nuestro archivo database.js
// que contendra toda la toda la configuracion de nuestra BD
// -Instancia de la BD que crea la conexion
// -Funciones .define() que crean las tablas en la BD a partir de
//  nuestros modelos
// -Relaciones entre Tablas 1 to 1 | 1 to n | n to n
/*  database.js */

// CREAMOS LOS MODELOS CON LOS QUE SE VAN A CREAR NUESTRAS TABLAS EN LA
// BASE DE DATOS
