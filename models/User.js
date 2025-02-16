const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    name: String,
    surname: String,
    email: String,
    password: String
}, { collection: 'Users' });

module.exports = mongoose.model('User', userSchema);