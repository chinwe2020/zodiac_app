const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    
    horoscope: [],

    journal: []

}, {timestamps: true})

module.exports = mongoose.model('Profile', profileSchema);