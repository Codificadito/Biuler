const ContactUsRepository = require('./ContactUsRepository');
const { transporter } = require('../../_Config/Email/_MailerConfig/nodemailer');
require('dotenv').config();

/** ENVÍA UN MAIL NOTIFICANDO UN ERROR A LOS ADMINISTRADORES.
 * 
 * @param {*} fullName : nombre del usuario que notifica un error.
 * @param {*} email : email del usuario que notifica un error.
 * @param {*} subject : asunto del correo.
 * @param {*} message : contenido del correo.
 * @returns 
 */
const createDebugMail = async (fullname, email, subject, message) => {
  try {
    //1. Verifica que los datos estén presentes.
    if (!fullname || !email || !subject || !message) {
      return ({ validation: 'Todos los campos deben ser obligatorios.' });
    }

    //2. Verifica que el formato del email sea correcto.
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail(email)) {
      return ({ validation: 'El correo está en un formato inválido.' });
    }

    //3. Verifica que la conexión con el servidor SMTP sea valida.
    transporter.verify((error, success) => {
      if (error) { return { error: "El servidor SMTP no esta disponible:", error }; }
      else { console.log('Servidor SMTP funcionando correctamente. Estado:'.green, success); }
    });

    //4. Envía los correos.
    await Promise.all([
      transporter.sendMail({ //Enviar correo al equipo de soporte:
        from: `"Soporte" <${process.env.NAME_EMAIL}>`,
        to: process.env.NAME_EMAIL,
        replyTo: email, //Correo del usuario (así el usuario recibirá un correo si le respondemos).
        subject: `Notificación de ${fullname}: ${subject}`,
        text: `Nombre: ${fullname}\nCorreo: ${email}\nAsunto: ${subject}\nMensaje: ${message}`,
      }),
      transporter.sendMail({ //Enviar confirmación al usuario:
        from: `"Contacto" <${process.env.NAME_EMAIL}>`,
        to: email,
        subject: 'Confirmación de envío',
        text: `Gracias por contactarnos. El equipo de Biuler se pondrá en contacto con usted.
              \n\nDatos enviados:
              \nNombre: ${fullname}
              \nCorreo: ${email}
              \nAsunto: ${subject}
              \nMensaje: ${message}`,
      }),
    ]);

    //5. Guardar el correo en la base de datos:
    return await ContactUsRepository.createDebugMail(fullname, email, subject, message);
  } catch (error) {
    throw new Error(`En ContactUsService.createDebugMail: ${error.message}`);
  }
};

module.exports = { createDebugMail };
