const Profile = require('../models/profile')

module.exports = {
    index,
    create
}

function index(req, res) {
    Profile.find({user: req.user._id})
    .then(profiles => {res.json(profiles)})
    .catch(err => {res.json(err)})
}

function create(req, res) {
    req.body.user = req.user._id
    Profile.create(req.body)
    .then(profile => {res.json(profile)})
    .catch(err => {res.json(err)})
}




