const mongoose = require('mongoose');

const eierSchema = new mongoose.Schema({
    navn: String,
    epost: String,
    passord: String,
    kontaktspråk: String,
    telefon: Number,
    isAdmin: Boolean
});

module.exports = mongoose.model("eier", eierSchema);