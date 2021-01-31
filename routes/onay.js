const express = require('express');
const router = express.Router();

const Onay = require('../models/Onay');
const User = require('../models/User');

router.post('/onaypost', async (req, res) =>{
    
    const isUserExist = await User.findOne({email: req.body.email});
    const isOnayExist = await Onay.findOne({email: req.body.email});
    if(isUserExist || isOnayExist){
        return res.status(404).send({success: false, message: 'Bu email daha önce kullanılmış.'});
    }

    const onay = new Onay({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password
    });

    onay.save()
        .then(result => {
            res.send({success: true, data: result})
        })
        .catch(err => console.log(err));
});

router.get('/onayget', (req, res) =>{
    Onay.find()
        .then(onay => {
            res.send(onay);
        })
        .catch(err => console.log(err));
});

router.delete('/onaydelete/:email', async (req, res) =>{
    const mail = req.params.email;
    const selectedOnay = await Onay.deleteOne({ email: mail});
    res.send({message: 'Onay silindi.', data: selectedOnay});
});

module.exports = router;