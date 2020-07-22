const BASE_URL = '/api/signs/'

export function getAllSigns() {
    return fetch(BASE_URL, {mode: 'cors'})
    .then(res => res.json())
}

export function getOneSign() {
    return fetch(BASE_URL + '?sunSign', {mode: 'cors'})
    .then(res => res.json())
}