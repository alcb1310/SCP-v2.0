import axios from 'axios';

export function fetchPresupuesto(obraIRI) {
  return axios.get('/api/presupuestos', {
    params: { obra: obraIRI },
  });
}
