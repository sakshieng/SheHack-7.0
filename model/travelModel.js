const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
});

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;