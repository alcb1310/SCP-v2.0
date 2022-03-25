import axios from 'axios';

export function getPartidas(uri) {
    const response = axios.get(uri);
    return response;
}
