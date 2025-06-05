const express = require('express')
const path = require('path') // Importing the express module and path module
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, 'public'))) // Serve static files from the public directory
app.set('view engine', 'ejs') // Set the view engine to EJS ... ejs render karega backend

app.get("/", function(req, res){
    res.render("index.ejs")
})
app.get("/profile/:username", function(req, res){
    res.send(`profile.ejs, ${req.params.username}`) // Dynamic route to render profile page with username
})
app.listen(3000, function(){
    console.log("console working");
})