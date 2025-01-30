const winston = require('winston');
const { format, transports } = winston;

/** INSERTAR INFORME DE ERRORES EN EL LOG.
 * 
 *  NIVELES:
 * 
 * 'info': notifica que la operación ocurrió con éxito.  
 * 'error': notifica que ocurrió un error que rompió el flujo de ejecución.  
 * 'warn': notifica que ocurrió un error menor, que no rompe el flujo de ejecución.  
 * 'debug': registra manualmente detalles sobre el error para su solución.
 */
const logger = winston.createLogger({
  transports: [
    //Registra los errores en un archivo llamado 'error.log'.
    new transports.File({ 
      filename: 'error.log', 
      level: 'error',
      format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, status, message, stack }) => {
          return `\n-------------------------[${timestamp}]-------------------------
                  \nLevel: ${level}
                  \nStatus code: ${status}
                  \nMessage: ${message}
                  \n${stack ? `Stack:\n${stack}` : ''}`;
        })
      )
    }),
    //También imprime el error en la consola.
    new transports.Console({
      format: format.combine(
        format.colorize(), //Habilita colores.
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] ${level}: ${message}`;
        })
      ),
    }),
  ],
});

module.exports = logger;
