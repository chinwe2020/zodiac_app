const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signSchema = new Schema({
    sunSign: String,
    dates: String,
    element: String,
    planet: String,
    strengths: String,
    weaknesses: String,
    likes: String,
    dislikes: String,
    compatiblity: String,
    luckyNumbers: String,
    image: String
})

module.exports = mongoose.model('Sign', signSchema);