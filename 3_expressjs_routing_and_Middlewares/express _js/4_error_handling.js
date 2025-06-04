const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile', (req, res, next) => {  //add next for error handling
  return next(new Error("Something went wrong"))  //yeh code taki yehi ruk jaye iske add code na chale due to error //display on console
})

app.use((err, req, res, next) => {   //search express js error handler and go to default error handler and copy this code  //always put this code in last
  console.error(err.stack)
  res.status(500).send('Something broke!')  //displayed on frontend
})
app.listen(3000) 

//localhost:3000/profile to check if error is working or not