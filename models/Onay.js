const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userOnaySchema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String
}, { collection: 'User_Onay' });

module.exports = mongoose.model('User_Onay', userOnaySchema);