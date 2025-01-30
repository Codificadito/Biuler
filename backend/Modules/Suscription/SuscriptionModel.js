const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../_Config/Database/sequelize');

const Suscription = sequelize.define('Suscription', {
  suscription_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(255),
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
  last_sent: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'suscriptions',
  timestamps: false,
});

module.exports = Suscription;
