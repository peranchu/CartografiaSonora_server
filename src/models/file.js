const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FileSchema = new Schema({
    date: {type: Date},
    description: String,
    audio: String
});

module.exports = mongoose.model('File', FileSchema);