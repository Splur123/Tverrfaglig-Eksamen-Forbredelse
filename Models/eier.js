const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const eierSchema = new mongoose.Schema(
    {
    navn: {type: String, required: true},
    epost: {type: String, required: true},
    passord: {type: String, required: true},
    kontaktspråk: String,
    telefon: Number,
    isAdmin: Boolean
});

// encrypt before saving
eierSchema.pre('save', async function(next){
    if (!this.isModified('passord')){
        next();
    };
    this.passord = await bcrypt.hash(this.passord, 10);
});

module.exports = mongoose.model('eier', eierSchema);