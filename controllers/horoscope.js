const fetch = require('node-fetch');
const BASE_URL = 'https://horoscope5.p.rapidapi.com/general/daily'

module.exports = {
    index
}

function index(req, res) {
    let sign = '';
    if(req.user.signs.length){
        sign = `?sign=${req.user.signs[0]}`
    }
    return fetch(`${BASE_URL}${sign}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "horoscope5.p.rapidapi.com",
            "x-rapidapi-key": process.env.API_KEY
        }
    })
    .then(response => {
        return response.json();
    })
    .then(horoscopes => res.json(horoscopes))
    .catch(err => {
        res.json(err);
    });
}