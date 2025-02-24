const mongoose = require('mongoose');

const eierSchema = new mongoose.Schema({
    navn: String,
    uniktNummer: Number,
    epost: String,
    passord: String,
    Kontaktspråk: String,
    telefon: Number
});

module.exports = mongoose.model("eier", eierSchema);