# Demo API REST utilizando ExpressJS

# Descripción
Simple aplicación desarrollada en ExpressJS que expone 2 endpoints.
- GET: `api/articles/node`: Muestra información asociada a artículos relacionados con NodeJS.
- DELETE: `api/articles/node/:id`: Elimina un artículo dado su id.

# Cómo empezar?
- Clonar o descargar el repositorio.
- Abrir un terminal en la raíz del proyecto.

# Ejecutar la API con Docker
- Instalar [Docker](https://docs.docker.com/compose/install/) en dependencia de su sistema operativo.
- Abrir un terminal en la raíz del proyecto.
- Ejecutar el comando `npm run start-docker` para que la se inicien los contenedores de node y mongodb. Aparecerá un log en la consola para indicar que la app y la bd están en ejecución.

# Ejecutar la API sin Docker
- Instalar versión estable de [NodeJS](https://nodejs.org/es/download/).
- Instalar versión estable de [MongoDB](https://www.mongodb.com/download-center/community) local. Para este demo se utilizó la versión 4.0.4 en Window x64. En caso de utilizar otro servidor de mongo puede editar la cadena de conexión en el fichero _migrate-mongo-config.js_, ubicado en la raíz del proyecto, sustituyendo su cadena de conexión por la existente: _localhost:27017_ .
- Instalar dependencias usando el comando `npm install`.
- Ejecutar el comando `npm start` para iniciar la API. Aparecerá un log en la consola para indicar que la app y la bd están en ejecución.

# Comandos disponibles
- `npm start`: Inicia la api.
- `npm run test`: Ejecuta las pruebas unitarias.
- `npm run migrate`: Ejecuta migraciones pendientes en la bd de mongo.
- `npm run migrate-down`: Revierte la última migración en la bd de mongo.
- `npm run migrate-status`: Muestra el estado de las migraciones existentes.
- `npm run start-docker`: Inicia los contenedores de node y mongodb.

# Pruebas unitarias
Se realizaron pruebas unitarias a ambos endpoints. Se verificó el estado y el json de la respuesta.
Para ejecutar las pruebas ejecute el comando `npm run test`.