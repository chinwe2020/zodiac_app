import tokenService from '../services/tokenService';
const BASE_URL = '/api/horoscopes'

export function getAllHoroscopes() {
    return fetch(`${BASE_URL}`, {
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}
    })
    .then(res => res.json());
}