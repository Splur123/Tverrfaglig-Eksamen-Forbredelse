const mongoose = require('mongoose');

const reinSchema = new mongoose.Schema({
    serienummer: Number,
    navn: String,
    flokk: String,
    fødselsdato: Date
});

module.exports = mongoose.model("eier", reinSchema);