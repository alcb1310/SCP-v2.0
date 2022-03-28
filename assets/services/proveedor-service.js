import axios from 'axios';

/**
 * Obtiene toda la informacion de un proveedor
 *
 * @param {String} provIRI
 * @returns {Array}
 */
export function fetchProveedor(provIRI) {
    return axios.get(provIRI);
}

export function fetchProveedores() {
    return axios.get('/api/proveedors');
}
