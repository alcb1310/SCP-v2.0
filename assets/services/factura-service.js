import axios from 'axios';

export function fetchFactura(id) {
    const url = '/api/facturas';
    return axios.get(url, {
        params: {
            id,
        },
    });
}

export function newFactura(obra, proveedor, numero, fecha, total) {
    return axios.post('/api/facturas', {
        obra,
        proveedor,
        numero,
        fecha,
        total,
    });
}

export function editaFactura(iri, obra, proveedor, numero, fecha, total) {
    console.log(iri, obra, proveedor, numero, fecha, total);
    return axios.put(iri, {
        obra,
        proveedor,
        numero,
        fecha,
        total,
    });
}
