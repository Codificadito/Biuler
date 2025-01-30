/** SOLO PERMITE EL PASO DE STRING.
 * 
 * @param {*} vector 
 * @returns 
 */
function allStrings(vector) {
  if (!Array.isArray(vector)) {
    throw new Error("El argumento debe ser un array.");
  }
  return vector.every(item => {
    if (Array.isArray(item)) {
      //Verifica si todos los elementos dentro del subarray son strings.
      return item.every(subItem => typeof subItem === 'string');
    }
    //Si no es un subarray, verifica que el elemento sea un string.
    return typeof item === 'string';
  });
}

/** SOLO PERMITE EL PASO DE NÚMEROS ENTEROS POSITIVOS.
 * 
 * @param {*} vector 
 * @returns 
 */
function allPositiveIntegers(vector) {
  if (!Array.isArray(vector)) {
    throw new Error("El argumento debe ser un array.");
  }
  return vector.every(item => Number.isInteger(item) && item > 0);
}

module.exports = {
  allStrings,
  allPositiveIntegers
}