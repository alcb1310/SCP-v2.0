import axios from 'axios';

export function fetchObras() {
    return axios.get('/api/obras', {
        params: { activo: true },
    });
}
