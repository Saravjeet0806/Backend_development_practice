const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mini_project1')

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
})

mongoose.model.exports = mongoose.model('user', userSchema);