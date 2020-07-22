const mongoose = require('mongoose');
const mongooseDateFormat = require('mongoose-date-format');

const Schema = mongoose.Schema;

const journalSchema = new Schema({

    journal: {
        type: String
    },
    date: {type: Date, default: new Date()}

}, {timestamps: true})

journalSchema.plugin(mongooseDateFormat);
module.exports = mongoose.model('Journal', journalSchema);