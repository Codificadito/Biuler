const path = require('path');
const multer = require('multer');
const fs = require('fs');
const crypto = require('crypto');

/** VERIFICAR SI EL DIRECTORIO EXISTE:
 * @param {*} directory : carpeta.
 */
const verificateDirectoryExists = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true }); //Sino existe, crea uno.
  }
};

/** CONFIGURAR EL GUARDADO DEL ARCHIVO (DA DESTINO Y NOMBRE):
 * @param {*} folder : nombre de la carpeta de destino
 */
const configPath = (folder) =>
  multer.diskStorage({
    filename: (req, file, cb) => {
      const timestamp = Date.now(); //Obtiene los milisegundos.
      const randomString = crypto.randomBytes(6).toString('hex'); //Obtiene un número aleatorio hexadecimal.
      const ext = path.extname(file.originalname); //Otiene extensión del archivo.
      const baseName = path.basename(file.originalname, ext); //Obtiene nombre del archivo.
      cb(null, `${baseName}_${timestamp}_${randomString}${ext}`); //Devuelve nombre único.
    },
    destination: (req, file, cb) => {
      const uploadPath = path.join(__dirname, `../../uploads/${folder}`); //Ruta de destino.
      verificateDirectoryExists(uploadPath); //Verifica si la ruta existe.
      cb(null, uploadPath); //Guarda en la ruta.
    },
  });

/** GUARDA EL ARCHIVO DESPUÉS DE PASAR UNOS FILTROS.
 * @param {*} folder : carpeta donde se guardará el archivo.
 * @param {*} allowedExtensions : extensiones permitidas para el archivo.
 * @param {*} maxFileSizeMB : tamaño máximo del archivo en MB.
 */
const saveFile = (folder, allowedExtensions, maxFileSizeMB) => 
  multer({
    fileFilter: (req, file, cb) => {
      //Filtra por las extensiones del archivo.
      const ext = path.extname(file.originalname).toLowerCase(); //Convierte .HTML a .html
      if (!allowedExtensions.includes(ext)) {
        return cb(
          new Error(`Solo se permiten archivos con extensiones: ${allowedExtensions.join(', ')}`)
        );
      }
      cb(null, true); //Callback interno de multer.
    },
    limits: {
      fileSize: maxFileSizeMB * 1024 * 1024, //Tamaño máximo en MB.
    },
    storage: configPath(folder), //Si pasa el filtro de archivos y tamaño, se guarda el archivo.
  });


module.exports = { verificateDirectoryExists, configPath, saveFile };
