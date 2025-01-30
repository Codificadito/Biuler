const { Sequelize } = require('sequelize');
const colors = require('colors');
require('dotenv').config();

//Crear una nueva instancia de Sequelize:
const sequelize = new Sequelize(
  process.env.DB_name, 
  process.env.DB_username,
  process.env.DB_password, 
  {
    host: process.env.DB_server,
    dialect: 'mssql',
    dialectOptions: {
    instanceName: 'SQLEXPRESS', //Especifica la instancia de SQL Server.
    options: {
      encrypt: false,
      trustServerCertificate: true,
      requestTimeout: 30000, //Tiempo de espera para ejecutar solicitud a BD en milisegundos (30 segundos).
    },
  },
  pool: {
    acquire: 30000, //Tiempo máximo para adquirir una conexión (30 segundos).
    idle: 180000, //Tiempo máximo que una conexión puede estar inactiva (3 minutos).
  },
  port: process.env.PORT_SQL_SERVER, //Puerto de SQL Server.
  logging: console.log, //Ver los logs de la conexión.
});

//Verificar la conexión:
sequelize
.authenticate()
.then(() => {
  console.log('Conexión con Sequelize exitosa.'.bgBlue);
})
.catch((err) => {
  console.error('Error en la conexión con Sequelize:'.bgRed, err.message);
  console.error('Detalles del error:'.bgRed, err);
});

module.exports = sequelize;

const { Connection } = require('tedious');

const config = {
  server: process.env.DB_server,
  authentication: {
    type: 'default',
    options: {
			userName: process.env.DB_username,
      password: process.env.DB_password,
    },
  },
  options: {
  	encrypt: false,
    database: process.env.DB_name,
    instanceName: 'SQLEXPRESS',
    trustServerCertificate: true,
  },
};

const connection = new Connection(config);

connection.on('connect', (err) => {
  if (err) {
    console.log('Error en la conexión con Tedious:'.bgRed, err);
  } else {
    console.log('Conexión exitosa con Tedious.'.bgBlue);
  }
});

connection.connect();
