const SuscriptionRepository = require('./SuscriptionRepository');
const { allStrings } = require('../../_Config/Validations/Validator');
const { transporter } = require('../../_Config/Email/_MailerConfig/nodemailer');
require('dotenv').config();

/** CREA SUSCRIPTOR.
 * 
 * @param {*} email 
 * @returns 
 */
const createSuscriptor = async (email) => {
  try {
    //1. Verifica asignación.
    if (!email) { throw new Error('El email es obligatorio.'); }

    //2. Verifica tipo.
    const valid = allStrings([email]);
    if (!valid) { throw new Error('El correo debe ser tipo string.'); }

    //3. Verifica formato.
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail(email)) { throw new Error('El correo está en un formato inválido.'); }

    //4. Verifica que no está duplicado.
    const find = SuscriptionRepository.findEmail(email);
    if (find) { throw new Error('Ya hay un suscriptor con ese email.'); }

    //5. Crea suscriptor sino está duplicado.
    return await SuscriptionRepository.createSuscriptor(email);
  } catch (error) {
    throw new Error('En SuscriptionService.createSuscription: ' + error.message);
  }
}

/** ENVIAR BOLETÍN.
 * 
 * @param {*} htmlContent 
 * @returns 
 */
const sendNewsletter = async (htmlContent) => {
  try {
    //1. Obtener todos los suscriptores.
    const subscribers = await SuscriptionRepository.getAllSubscribers();
    if (!subscribers.length) {
      throw new Error('No hay suscriptores.');
    }

    //2. Verifica que la conexión con el servidor SMTP sea valida.
    transporter.verify((error, success) => {
      if (error) { return { error: "El servidor SMTP no esta disponible:", error }; }
      else { console.log('Servidor SMTP funcionando correctamente. Estado:'.green, success); }
    });

    //3. Enviar correos.
    for (const subscriber of subscribers) {
      await transporter.sendMail({
        from: `"Boletín de Novedades" <${process.env.NAME_EMAIL}>`,
        to: subscriber.email,
        subject: 'Novedades Recientes',
        html: htmlContent
      });
      await SuscriptionRepository.updateLastSent(subscriber.email);
    }
    return { message: 'Boletín enviado exitosamente.' };
  } catch (error) {
    throw new Error('En SuscriptionService.sendNewsletter: ' + error.message);
  }
}

module.exports = {
  createSuscriptor,
  sendNewsletter
}