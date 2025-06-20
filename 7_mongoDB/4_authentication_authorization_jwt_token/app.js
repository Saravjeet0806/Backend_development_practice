const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/create', async (req, res) => {
    let { username, email, password, age } = req.body

    bcrypt.genSalt( 10, (err, salt) => { //generate salt

        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
                username,
                email,
                password: hash ,  // Store the hashed password
                age
            })

            let token = jwt.sign({ email}, "secretkey")
            res.cookie('token', token) // Set the token in a cookie

             res.send(createdUser)
        })
    })

})

app.get('/login', async (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email })

    if(!user) res.send("Something went wrong")
    
    bcrypt.compare(req.body.password, user.password, function(err, result) { // Compare the password with the hashed password
        if(result) {
            let token = jwt.sign({email: user.email}, "secretkey") // Create a JWT token
            res.cookie('token', token) // Set the token in a cookie
            res.send("Login successful")
        }
        else res.send("Something went wrong")
    })   
})

app.get('/logout', (req, res) => {
    res.cookie('token', "")
    res.redirect('/')
})


app.listen(3000)