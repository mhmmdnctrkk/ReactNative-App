const express = require('express');
const router = express.Router();

const PersonelBilgileri = require('../models/PersonelBilgileri');

router.post('/pbpost', async (req, res) =>{

    const perBil = await PersonelBilgileri.findOne({userId: req.body.userId});
    if(perBil)
    {
        return res.send({message: 'Bu personel zaten var.', data: perBil});
    }

    const personelBilgileri = new PersonelBilgileri({
        userId: req.body.userId,
        fullName: req.body.fullName,
        wosHIndex: req.body.wosHIndex,
        wosAtifSayisi: req.body.wosAtifSayisi,
        scopusHIndex: req.body.scopusHIndex,
        scopusAtifSayisi: req.body.scopusAtifSayisi,
        uzmanlikAlani: req.body.uzmanlikAlani
    });

    personelBilgileri.save()
        .then(result => {
            res.send({message: 'Personel bilgileri güncellendi.', data: result});
        })
        .catch(err => console.log(err));
});

router.get('/pbget', (req, res) => {
    PersonelBilgileri.find()
        .then(personel => {
            res.send(personel);
        })
        .catch(err => console.log(err));
});

router.put('/pbupdate', async (req, res) => {
    const perBil = await PersonelBilgileri.findOne({userId: req.body.userId});
    if(!perBil)
        return res.status(404).send('Böyle bir personel yoktur.');
    perBil.fullName = req.body.fullName;
    perBil.wosHIndex = req.body.wosHIndex,
    perBil.wosAtifSayisi = req.body.wosAtifSayisi,
    perBil.scopusHIndex = req.body.scopusHIndex,
    perBil.scopusAtifSayisi = req.body.scopusAtifSayisi,
    perBil.uzmanlikAlani = req.body.uzmanlikAlani
    perBil.save();
    res.send(perBil);
});

router.get('/pbget', (req, res) =>{
    PersonelBilgileri.find()
        .then(personel => {
            res.send(personel);
        })
        .catch(err => console.log(err));
});

module.exports = router;