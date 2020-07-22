const Sign = require('../models/sign');

module.exports = {
    index,
    create,
    update,
    delete: deleteOne,
    show
}

function index(req, res) {
    Sign.find({}, function(err, signs) {
        res.status(200).json(signs)
    });
}

function show(req, res) {
    Sign.findById({}, function(err, signs) {
        res.status(200).json(signs)
    })
}

function create(req, res) {
    Sign.create(req.body, function(err, sign){
        res.status(201).json(sign)
    });
}

function update(req, res) {
    Sign.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedSign) {
        res.status(200).json(updatedSign)
    })
}

function deleteOne(req, res) {
    Sign.findByIdAndDelete(req.params.id, function(err, deletedSign) {
        res.status(200).json(deletedSign)
    })
}