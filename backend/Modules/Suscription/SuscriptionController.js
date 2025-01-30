const SuscriptionService = require('./SuscriptionService');
const logger = require('../../_Config/Logs/logger');
const { saveFile } = require('../../_Config/Multer/uqloadFile');
const fs = require('fs');
const util = require('util');
const upload = saveFile('newsletters', ['.html'], 5);
const uploadHtml = util.promisify(upload.single('html'));

/** CREA UNA SUSCRIPCIÓN PARA QUE EL USUARIO RECIBA BOLETINES DE BIULER.
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createSuscriptor = async (req, res) => {
  const { email } = req.body;

  try {
    const body = await SuscriptionService.createSuscriptor(email);
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
    const message = error.message.split(':')[1]?.trim() || 'Error desconocido';
    res.status(500).json({
      success: false,
      message: message
    });
  }
}

/** ENVIAR BOLETÍN.
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const sendNewsletter = async (req, res) => {
  try {
    //1. Captura el archivo HTML.
    await uploadHtml(req, res);
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Debe subir un archivo HTML.' });
    }

    //2. Procesa el archivo HTML.
    const filePath = req.file.path;
    let htmlContent;
    try {
      htmlContent = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
      return res.status(500).json({ 
        success: false, 
        message: 'Error al leer el archivo HTML.' 
      });
    }

    //3. Valida el contenido del archivo HTML.
    if (htmlContent.trim().length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'El HTML se recibió pero está vacío.'
      });
    }

    //4. Envía el HTML a los suscriptores.
    const body = await SuscriptionService.sendNewsletter(htmlContent);
    return res.status(200).json({ 
      success: true, 
      message: body.message
    });
  } catch (error) {
    //Registro del error.
    logger.error({
      message: error.message,
      stack: error.stack,
      status: error.status || 500,
    });

    //Envío del error al cliente.
    res.status(500).json({
      success: false,
      message: 'Ocurrió un error ineperado al enviar el boletín.',
    });
  }
};

module.exports = {
  createSuscriptor,
  sendNewsletter
}