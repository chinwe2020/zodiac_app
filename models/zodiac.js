const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zodiacSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    sign: {
        type: String,
        required: true
    },
    image: {
        type: String
    }

},{timestamps: true})

module.exports = mongoose.model('Zodiac', zodiacSchema);