const express = require('express');
const router = express.Router();

const User = require('../models/User');
const verifyToken = require('./verifyToken');

router.get('/:id', verifyToken, (req, res) => {
    User.find({id: req.params.id})
    .then(users => {
        res.send({success: true, data:req.user });
    })
    .catch(res.status(400).send({success: false, error}));
});

module.exports = router;