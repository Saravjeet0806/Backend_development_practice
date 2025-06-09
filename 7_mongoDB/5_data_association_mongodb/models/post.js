const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    post: String,
    user:  {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user' // Reference to the user model
           }
    ,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('post', postSchema);
