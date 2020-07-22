import tokenService from '../services/tokenService';
const BASE_URL = '/journal';

export function getAllJournals() {
    console.log(tokenService.getToken())
    return fetch(BASE_URL, 
        {headers:{'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}})
    .then(res => res.json())
}

export function create(journal) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(journal)
    })
    .then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    })
    .then(res => res.json());
}

export function update(journal) {
    return fetch(`${BASE_URL}/${journal._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(journal)
    })
    .then(res => res.json());
}