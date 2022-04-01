import axios from 'axios';

export function cambiaContrasena(username, password) {
    console.log(username, password);
    return axios.post('/api/user/changepass', {
        username,
        password,
    });
}
