const ContactUsService = require('./ContactUsService');
const ContactUsRepository = require('./ContactUsRepository');
const logger = require('../../_Config/Logs/logger');

/** PROCESA LA SOLICITUD ANTES DE ENVIAR UN EMAIL A LOS ADMINISTRADORES.
 * 
 * @param {*} req : fullname, email, subject, message.
 * @param {*} res 
 * @returns 
 */
const createDebugMail = async (req, res) => {
  const { fullname, email, subject, message } = req.body;

  try {
    const body = await ContactUsService.createDebugMail(fullname, email, subject, message);
    return res.status(200).json({ 
      success: true, 
      body
    });
  } catch (error) {
    //Registro del error.
    logger.error({
      message: error.message,
      stack: error.stack,
      status: error.status || 500,
    });

    //Envío del error al cliente.
    res.status(501).json({
      success: false,
      message: 'Ocurrió un error ineperado al enviar tu email.',
    });
  }
};

module.exports = { createDebugMail };
