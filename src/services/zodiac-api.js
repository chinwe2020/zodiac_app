import tokenService from '../services/tokenService';
const BASE_URL = '/api/signs/'

export function getAllSigns() {
    return fetch(BASE_URL, 
        {headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}})
    .then(res => res.json())
}

export function getOneSign() {
    return fetch(BASE_URL + '?sunSign',     
        {headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}})
    .then(res => res.json())
}