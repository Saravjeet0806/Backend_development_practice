const express = require('express')
const app = express()
//app.use === it is used to use middleware
app.use(function(req, res, next){  //pehle yeh chalega always between source and destination 
   console.log("middleware chala");
   next();  //forward request (maybe next route or next middleware)
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.listen(3000)