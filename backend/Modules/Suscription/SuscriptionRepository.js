const { Sequelize } = require('sequelize');
const Suscriptions = require('./SuscriptionModel');

/** CREA UN SUSCRIPTOR.
 * 
 * @param {*} email 
 * @returns 
 */
const createSuscriptor = async (email) => {
  try {
    return await Suscriptions.create({
      email: email
    });
  } catch (error) {
    throw new Error('En SuscriptionRepository.createSuscriptor: ' + error.message);
  }
}

/** OBTENER TODOS LOS SUSCRIPTORES.
 * 
 * @returns 
 */
const getAllSubscribers = async () => {
  return await Suscriptions.findAll({ attributes: ['email'] });
}

/** ACTUALIZAR EL HORARIO DE ENVÍO.
 * 
 * @param {*} email 
 * @returns 
 */
const updateLastSent = async (email) => {
  return await Suscriptions.update(
    { last_sent: Sequelize.literal('GETDATE()') },
    { where: { email: email } }
  );
}

/** ENCUENTRA EMAIL DUPLICADO.
 * 
 * @param {*} email 
 * @returns 
 */
const findEmail = async (email) => {
  try {
    return await Suscriptions.findOne({
      where: {
        email: email
      }
    })
  } catch (error) {
    throw new Error('En SuscriptionRepository.findEmail: ' + error.message);
    
  }
}

module.exports = {
  createSuscriptor,
  getAllSubscribers,
  updateLastSent,
  findEmail
}