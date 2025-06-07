const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/mongopractice`);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

module.exports = mongoose.model('user', userSchema);
// This code connects to a MongoDB database named 'mongopractice' and defines a User model with fields for name, email, and age.