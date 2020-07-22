import tokenService from '../services/tokenService';
const BASE_URL = '/journal/';

export function getAllJournals() {
    return fetch(BASE_URL, {
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json())
}

export function create(journal) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(journal)
    }, {mode: "cors"})
    .then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: "DELETE",
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
}

export function update(journal) {
    return fetch(`${BASE_URL}${journal._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(journal)
    }, {mode: "cors"})
    .then(res => res.json());
}