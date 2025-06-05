# Initializing a project

- initialize a project with npm -- npm init -y
- express install -- npm i express
- setting up ejs for ejs pages
   install ejs from npm
   setup ejs as a view engine
   npm install ejs



# Notes


- etting up parsers for form
- setting up ejs for ejs pages
- setting up public static files
- dynamic routing 
- how to get data coming from frontend at backend route


## To make dyamic route use this code 

-- app.get("/profile/:username", function(req, res){
    res.send(`profile.ejs, ${req.params.username}`)  //this will show dyanmic user using dynamic routing
    })