const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

const authRoutes = require('./routes/auth');
const userProfileRoutes = require('./routes/userProfile');
const personelBilgileriRoutes = require('./routes/personelBilgileri');
const makaleRoutes = require('./routes/makale');
const projeRoutes = require('./routes/proje');
const onayRoutes = require('./routes/onay');

app.use('/arved/users', authRoutes);
app.use('/arved/user/profile', userProfileRoutes);
app.use('/arved/personelbilgileri', personelBilgileriRoutes);
app.use('/arved/makalebilgileri', makaleRoutes);
app.use('/arved/projebilgileri', projeRoutes);
app.use('/arved/onaydurumu', onayRoutes);

app.get('/', (req, res) => {
    res.send('WELCOME TO ARVED');
});

mongoose.connect('mongodb://localhost:27017/ARVED',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(3000, () => console.log('Server is running.'));
    })
    .catch(err => console.log(err));
