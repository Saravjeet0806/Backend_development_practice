const express = require('express');
const app = express();
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', async (req, res) => {
    let { username, name, age, email, password } = req.body;
    let user = userModel.findOne({ email })
    if (user) {
        return res.status(300).send('User already exists');
    }

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                username,
                name,
                age,
                email,
                password: hash
            }).then(() => {
                res.status(200).send('User registered successfully');
            }).catch(err => {
                res.status(500).send('Error registering user');
            })


        })
    })

})

app.listen(3000)