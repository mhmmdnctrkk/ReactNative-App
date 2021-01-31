const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projeSchema = new Schema({
    projeId: String,
    userId: String,
    bap: Boolean,
    uluslararasi: Boolean,
    yil: String,
    projeDurumu: String,
    projeTuru: String,
    alanBilgisi: String,
    projeAdi: String,
    projeButcesi: String,
    paraBirimi: String,
    kontratliProje: Boolean,
    disDestekli: Boolean,
    uluslararasiIsBirlikli: Boolean,
    arastirmaciSayisi: String,
    projeYurutucusu: String
}, { collection: 'Proje_Bilgileri' });

module.exports = mongoose.model('Proje_Bilgileri', projeSchema);