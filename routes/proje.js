const express = require('express');
const router = express.Router();

const Proje = require('../models/Proje');

router.post('/projepost', (req, res) =>{
    const proje = new Proje({
        projeId: req.body.projeId,
        userId: req.body.userId,
        bap: req.body.bap,
        uluslararasi: req.body.uluslararasi,
        yil: req.body.yil,
        projeDurumu: req.body.projeDurumu,
        projeTuru: req.body.projeTuru,
        alanBilgisi: req.body.alanBilgisi,
        projeAdi: req.body.projeAdi,
        projeButcesi: req.body.projeButcesi,
        paraBirimi: req.body.paraBirimi,
        kontratliProje: req.body.kontratliProje,
        disDestekli: req.body.disDestekli,
        uluslararasiIsBirlikli: req.body.uluslararasiIsBirlikli,
        arastirmaciSayisi: req.body.arastirmaciSayisi,
        projeYurutucusu: req.body.projeYurutucusu
    });
    
    proje.save()
        .then(result => {
            res.send({message: 'Proje eklendi.', data: result});
        })
        .catch(err => console.log(err));
});

router.get('/projeget', (req, res) => {
    Proje.find()
        .then(proje => {
            res.send(proje);
        })
        .catch(err => console.log(err));
});

router.put('/projeupdate', async (req, res) => {
    const selectedProje = await Proje.findOne({ projeId: req.body.projeId});
    if(!selectedProje)
        return res.status(404).send('Böyle bir proje yoktur.'); 
    selectedProje.userId = req.body.userId,
    selectedProje.bap = req.body.bap,
    selectedProje.uluslararasi = req.body.uluslararasi,
    selectedProje.yil = req.body.yil,
    selectedProje.projeDurumu = req.body.projeDurumu,
    selectedProje.projeTuru = req.body.projeTuru,
    selectedProje.alanBilgisi = req.body.alanBilgisi,
    selectedProje.projeAdi = req.body.projeAdi,
    selectedProje.projeButcesi = req.body.projeButcesi,
    selectedProje.paraBirimi = req.body.paraBirimi,
    selectedProje.kontratliProje = req.body.kontratliProje,
    selectedProje.disDestekli = req.body.disDestekli,
    selectedProje.uluslararasiIsBirlikli = req.body.uluslararasiIsBirlikli,
    selectedProje.arastirmaciSayisi = req.body.arastirmaciSayisi,
    selectedProje.projeYurutucusu = req.body.projeYurutucusu    
    
    selectedProje.save();
    res.send({message: 'Proje güncellendi.', data: selectedProje});
});

router.delete('/projedelete/:projeId', async (req, res) => {
    const proId = req.params.projeId;
    const selectedProje = await Proje.deleteOne({ projeId: proId});
    res.send(({message: 'Proje silindi.', data: selectedProje}));
});

module.exports = router;