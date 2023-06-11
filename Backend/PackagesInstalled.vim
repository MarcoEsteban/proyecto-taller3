"* -----------------------------------------------------------------------------
"*                   COMANDOS Y PAQUETES MAS UTILIZADOS
"* -----------------------------------------------------------------------------
"TODO --------------------------------------------------------------------------
"TODO                       INICIAR PROYECTO DE NODE:
"TODO --------------------------------------------------------------------------
"? > npm init -y

"TODO --------------------------------------------------------------------------
"TODO                     INSTALAR LOS PAQUETES NECESARIOS:
"TODO --------------------------------------------------------------------------
"! ----------------------------------
"!         Instalar typescript:
"! Nos permite tener Tipado de Datos.
"! ----------------------------------
    "* -------------------------------------------------------------------
    "* Forma Global -> Esto es para configurar nuestro entorno de trabajo:
    "* -------------------------------------------------------------------
    "? > npm i typescript -g 
    "* -------------------------------
    "* Forma Dependecia de Desarrollo:
    "* -------------------------------
    "? > npm i typescript -D
    "! -------------------------
    "! Eliminar de Forma Global:
    "! -------------------------
    "? > npm un -g typescript 
"! --------------------------------------------------------------
"!                      Instalar ts-node:
"! Nos ayuda a Transpilar el codigo de Typescript <=> JavaScript.
"! --------------------------------------------------------------
    "* -------------------------------------------------------------------
    "* Forma Global -> Esto es para configurar nuestro entorno de trabajo:
    "* -------------------------------------------------------------------
    "? > npm i ts-node -g 
    "* -------------------------------
    "* Forma Dependecia de Desarrollo:
    "* -------------------------------
    "? > npm i ts-node -D
    "! -------------------------
    "! Eliminar de Forma Global:
    "! -------------------------
    "? > npm un -g ts-node 
"! --------------------------------------------------------
"!                    Instalar nodemon:
"! Nos ayuda a monitorea los cambios en el código fuente y 
"!             automáticamente re-inicia el servidor.
"! --------------------------------------------------------
    "* -------------------------------------------------------------------
    "* Forma Global -> Esto es para configurar nuestro entorno de trabajo:
    "* -------------------------------------------------------------------
    "? > npm i nodemon -g 
    "* -------------------------------
    "* Forma Dependecia de Desarrollo:
    "* -------------------------------
    "? > npm i nodemon -D
    "! -------------------------
    "! Eliminar de Forma Global:
    "! -------------------------
    "? > npm un -g nodemon 

"! --------------------------------------
"!          Instalar ts-node-dev:
"! Es la combinacion de ts-node y nodemon
"! --------------------------------------
    "* -------------
    "* Forma Global:
    "* -------------
    "? > npm i ts-node-dev -g 
    "* -------------------------------
    "* Forma Dependecia de Desarrollo:
    "* -------------------------------
    "? > npm i ts-node-dev -D
    "! -------------------------
    "! Eliminar de Forma Global:
    "! -------------------------
    "? > npm un -g ts-node-dev 
"TODO --------------------------------------------------------------------------
"TODO                      INICIAR PROYECTO DE TYPESCRIPT:
"TODO --------------------------------------------------------------------------
"* SI esta instaldo de forma Global ejecutar asi:
"? > tsc --init
"* SI NO esta instaldo de forma Global ejecutar asi:
"? > npx tsc --init

"TODO --------------------------------------------------------------------------
"TODO      INSTALAMOS LAS LIBRERIAS DE DEPENDENCIA PARA EMPEZAR EL BACKEND:
"TODO --------------------------------------------------------------------------
"* express      :: Manejador de peticiones http, es un framework de nodejs.
"* cors         :: Permiter que los empoyst se consuma de diferentes origenes.
"* dotenv       :: Permiter poder crear las variables de entornos.
"* multer       :: Permiter poder cargar archivo a nuestra aplicacion.
"* morgan       :: Permiter saber las peticiones que recive el Servidor.
"* bcryptjs     :: Permite encriptar y desincreptar contraseñas.
"* jsonwebtoken :: Nos permite generar el jwt(Json Web Token).
"* pg           :: Permite poder crear modulo de conexion con PostgresSQL.
"! NOTA ===> '-E' Indico que instale la  version exacta.
"? > npm i express cors dotenv multer morgan bcryptjs jsonwebtoken pg -E

"TODO --------------------------------------------------------------------------
"TODO  INSTALAMOS LOS TYPADOS DE CADA LIBRERIAS COMO DEPENDENCIA DE DESARROLLO:
"TODO --------------------------------------------------------------------------
"* Nos permite que nuestras librerias o paquetes esten en un mismo entorno:
"? > npm i @types/express @types/cors @types/dotenv @types/multer @types/pg @types/bcryptjs @types/jsonwebtoken @types/morgan  -D
