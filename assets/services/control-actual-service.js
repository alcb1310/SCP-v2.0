import axios from 'axios';

/**
 * Esta funcion busca el control presupuestario actual para una determinada obra
 *
 * @param {String} obraIRI
 * @returns {Promise}
 */
export function fetchPresupuesto(obraIRI) {
  return axios.get('/api/presupuestos', {
    params: { obra: obraIRI },
  });
}

/**
 *Esta funcion busca el control presupuestario para una determinada fecha
 *
 * @param {Integer} obraId
 * @param {Date} fecha
 * @param {Integer}  nivel
 * @returns {Promise}
 */
export function fetchPresupuestoDate(obraId, fecha) {
  return axios.get('/api/controls/', {
    params: {
      fecha,
    },
  });
}
