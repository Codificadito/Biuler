const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../_Config/Database/sequelize');

const EmailsReceived = sequelize.define('EmailsReceived', {
  email_received_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('GETDATE()'),
    field: 'created_at', //Define el nombre exacto de la columna tal como aparece en la tabla SQL.
    get() {
      return this.getDataValue('created_at'); //Leer campo.
    },
    set() {
      //No se permite que Sequelize escriba en este campo.
      throw new Error('"created_at" es manejado exclusivamente por la base de datos y no se permite su escritura desde el backend.');
    },
  },
}, {
  tableName: 'emails_received',
  timestamps: false,
});

module.exports = EmailsReceived;
