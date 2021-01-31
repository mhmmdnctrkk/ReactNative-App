const express = require('express');
const router = express.Router();

const Makale = require('../models/Makale');

router.post('/makalepost', (req, res) =>{
    const makale = new Makale({
        makaleId: req.body.makaleId,
        userId: req.body.userId,
        uluslararasiYayin: req.body.uluslararasiYayin,
        endeksTuru: req.body.endeksTuru,
        uluslararasiIsBirlikli: req.body.uluslararasiIsBirlikli,
        makaleAdi: req.body.makaleAdi,
        dergiAdi: req.body.dergiAdi,
        yil: req.body.yil,
        cilt_volume: req.body.cilt_volume,
        sayi: req.body.sayi,
        sayfaNumarasi: req.body.sayfaNumarasi,
        doi: req.body.doi,
        bap: req.body.bap,
        kurumDisiYazar: req.body.kurumDisiYazar,
        yazarListesi: req.body.yazarListesi
    });

    makale.save()
        .then(result => {
            res.send({message: 'Makale eklendi.', data: result})
        })
        .catch(err => console.log(err));
});

router.get('/makaleget', (req, res) =>{
    Makale.find()
        .then(makale => {
            res.send(makale);
        })
        .catch(err => console.log(err));
});

router.put('/makaleupdate', async (req, res) =>{
    const selectedMakale = await Makale.findOne({ makaleId: req.body.makaleId});
    if(!selectedMakale)
        return res.status(404).send('Böyle bir makale yoktur.');
    selectedMakale.userId = req.body.userId,
    selectedMakale.uluslararasiYayin = req.body.uluslararasiYayin,
    selectedMakale.endeksTuru = req.body.endeksTuru,
    selectedMakale.uluslararasiIsBirlikli = req.body.uluslararasiİşBirlikli,
    selectedMakale.makaleAdi = req.body.makaleAdi,
    selectedMakale.dergiAdi = req.body.dergiAdi,
    selectedMakale.yil = req.body.yil,
    selectedMakale.cilt_volume = req.body.cilt_volume,
    selectedMakale.sayi = req.body.sayi,
    selectedMakale.sayfaNumarasi = req.body.sayfaNumarasi,
    selectedMakale.doi = req.body.doi,
    selectedMakale.bap = req.body.bap,
    selectedMakale.kurumDisiYazar = req.body.kurumDisiYazar,
    selectedMakale.yazarListesi = req.body.yazarListesi

    selectedMakale.save();
    res.send({message: 'Makale güncellendi.', data: selectedMakale});
});

router.delete('/makaledelete/:makaleId', async (req, res) =>{
    const makId = req.params.makaleId;
    const selectedMakale = await Makale.deleteOne({ makaleId: makId});
    res.send({message: 'Makale silindi.', data: selectedMakale});
});

module.exports = router;