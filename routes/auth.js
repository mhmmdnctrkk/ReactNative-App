const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const generateToken = user => {
    return (
        jwt.sign({
            id: user.id, 
            email: user.email}, 
            'SECRET'
        ));
};

router.post('/register', async (req,res) => {

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        id: req.body.id,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: hashPassword
    });
    try{
        const savedUser = await user.save();
        //const token = generateToken(user);
        res.send({success: true, data: savedUser});
    }
    catch (error){
        res.status(400).send({success: false, error});
    }
});

router.post('/login', async (req,res) => {
    
    const user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(404).send({success: false, message: 'Bu maile ait hesap bulunmamaktadır.'});
    }
   
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword){
        return res.status(404).send({success: false, message: 'Şifre hatalıdır.'});
    }
    
    const token = generateToken(user);
    res.header('auth-token', token).send({success: true, data: user, token});
});

module.exports = router;