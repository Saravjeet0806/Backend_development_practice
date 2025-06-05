const express = require('express')
const app = express()

app.use(express.json()); //makes json based data readable (refer to notes for blob and plaintext)
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile', (req, res, next) => {  
  return next(new Error("Something went wrong")) 
})

app.use((err, req, res, next) => {  
  console.error(err.stack)
  res.status(500).send('Something broke!')  
})
app.listen(3000) 
