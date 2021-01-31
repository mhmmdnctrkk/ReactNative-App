const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const makaleSchema = new Schema({
    makaleId: String,
    userId: String,
    uluslararasiYayin: Boolean,
    endeksTuru: String,
    uluslararasiIsBirlikli: Boolean,
    makaleAdi: String,
    dergiAdi: String,
    yil: String,
    cilt_volume: String,
    sayi: String,
    sayfaNumarasi: String,
    doi: String,
    bap: Boolean,
    kurumDisiYazar: Boolean,
    yazarListesi: String
}, { collection: 'Makale_Bilgileri' });

module.exports = mongoose.model('Makale_Bilgileri', makaleSchema);