const Zodiac = require('../models/zodiac')

module.exports = {
    index
}

function index(req, res) {
    Zodiac.find({})
    .then(zodiacs => {res.json(zodiacs)})
    .catch(err => {res.json(err)})
}