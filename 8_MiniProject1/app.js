const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
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

app.get('/profile', isLoggedIn, async (req, res) => { //protected route using isLoggedIn middleware
    let user = await userModel.findOne({email: req.user.email});
    res.render('profile', {user})

})

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/register', async (req, res) => {
    let { username, name, age, email, password } = req.body;
    let user = await userModel.findOne({ email })
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
            })
            let token = jwt.sign({ email: email, userid: user._id }, "secretkey")
            res.cookie('token', token)
            res.send("registered")


        })
    })

})

app.post('/login', async (req, res) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email })
    if (!user) {
        return res.status(500).send('Something went wrong');
    }

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = jwt.sign({ email: email, userid: user._id }, "secretkey")
            res.cookie('token', token)
            res.status(200).redirect("/profile")
        }
        else res.redirect('/login')
    })
})

app.get('/logout', (req, res) => {
    res.cookie('token', "")
    res.redirect('/login')
})

function isLoggedIn(req, res, next) { // Middleware to check if user is logged in.. it will be used in routes where we want to check if user is logged in or not eg making a post, liking a post etc.
    if (req.cookies.token === '') res.redirect("/login")

    else {
        let data = jwt.verify(req.cookies.token, "secretkey")
        req.user = data; // Storing user data in req.user to use it in the next middleware or route handler
    }
    next();
}

app.listen(3000)