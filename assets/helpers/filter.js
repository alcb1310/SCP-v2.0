/**
 *
 * Busca que no haya nivel mayor al deseado
 *
 * @param {Array} control
 * @param {integer} nivel
 * @returns {Array}
 */
export function filterData(control, nivel) {
  var len = control.length;
  var result = new Array();
  for (var i = 0; i < len; i++) {
    if (control[i].nivel <= nivel) {
      result.push(control[i]);
    }
  }
  return result;
}

export function filterObra(control, obra) {
  var len = control.length;
  var result = new Array();

  for (var i = 0; i < len; i++) {
    if (control[i].obra.id == obra) {
      result.push(control[i]);
    }
  }
  return result;
}
