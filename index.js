const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// console.log(process.env);

// Crear el servidor de express
const app = express();

// coneccion base de datos

dbConnection();

// cors
app.use(cors());


// directorio publico
app.use(express.static('public'));

// lectura y parseo del body
app.use(express.json());

// Rutas
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'));

// TOTO: CRUD // Eventos

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})

