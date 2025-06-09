const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jwt_auth')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
})

module.exports = mongoose.model('user', userSchema)