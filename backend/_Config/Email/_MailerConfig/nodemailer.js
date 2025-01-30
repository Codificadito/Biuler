const nodemailer = require('nodemailer');
require('dotenv').config();

//Se configura la conexión entre el emisor (admin) y su servidor de correo.
const transporter = nodemailer.createTransport({
  host: process.env.HOST, //Servidor de correo que usa el administrador.
  port: Number(process.env.PORT), //Puerto del servidor de correo.
  secure: process.env.SECURE === 'false' ? false : true, //STARTTLS requiere 'false' (leer descripción abajo).
  auth: {
    user: process.env.NAME_EMAIL, //Email del administrador.
    pass: process.env.PASSWORD_EMAIL, //Contraseña del correo del administrador.
  },
  /** ¿QUÉ ES STARTTLS?
   * Es el estándar de conexión entre un cliente y el servidor SMTP, donde se inicia una conexión sin cifrado
   * y luego, automáticamente en el servidor (si es que lo soporta), se negocia un certificado TLS/SSL.
   * Sino se utiliza esta opción, el cliente deberá proporcionar un certificado válido de antemano.
   */
});

module.exports = { transporter };
