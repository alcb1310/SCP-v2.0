import axios from 'axios';

export function fetchReporteGastadoMes(obraCod, fechaConsulta, nivelConsulta) {
    return axios.get('/reportes/gastomes', {
        params: {
            obra: obraCod,
            fecha: fechaConsulta,
            nivel: nivelConsulta,
        },
    });
}
