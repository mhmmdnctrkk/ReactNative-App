const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personelBilgileriSchema = new Schema({
    userId: String,
    fullName: String,
    wosHIndex: Number,
    wosAtifSayisi: Number,
    scopusHIndex: Number,
    scopusAtifSayisi: Number,
    uzmanlikAlani: String
}, { collection: 'Personel_Bilgileri' });

module.exports = mongoose.model('Personel_Bilgileri', personelBilgileriSchema);
