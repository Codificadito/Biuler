const EmailsReceived = require('./ContactUsModel');

/** INSERTA EL REGISTRO DE QUE SE ENVIÓ UN CORREO.
 * 
 * @param {*} emailData 
 * @returns 
 */
const createDebugMail = async (fullname, email, subject, message) => {
  try {
    const received = await EmailsReceived.create({
      fullName: fullname,
      email: email,
      subject: subject,
      message: message
    });
    return { message: 'Correo enviado y registrado exitosamente.', received }
  } catch (error) {
    throw new Error(`En ContactUsRepository.createDebugMail: ${error}, ${error.message}`);
  }
};

module.exports = { createDebugMail };
