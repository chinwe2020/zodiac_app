const Journal = require('../models/journal');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update
}

function index(req, res) {
    Journal.find()
    .then(profiles => {res.json(profiles)})
    .catch(err => {res.json(err)})
}

function create(req, res) {
    Journal.create(req.body)
    .then(profile => {res.json(profile)})
    .catch(err => {res.json(err)})
}

function deleteOne(req, res) {
    Journal.findByIdAndDelete(req.params.id, function(err, deletedJournal) {
        res.status(200).json(deletedJournal)
    })
}

function update(req, res) {
    Journal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(journal => {res.json(journal)})
    .catch(err => {res.json(err)})
}
