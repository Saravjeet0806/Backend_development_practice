const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());  //middleware to parse cookies

// app.get('/', (req, res)=>{
//     res.cookie('name', 'Saravjeet')  //setting a cookie
//     res.send('Hello World');  //use i button in browser to see the cookie or editthiscookie extension
// })

// app.get('/read', (req, res)=>{
//     console.log(req.cookies);  //reading cookies
//     res.send('cookie console logged');  //send cookies to the client
// })

// app.get('/', function (req, res) {
//     bcrypt.genSalt(10, function(err, salt) {  //generating salt  //got this from bcrypt documentation
//         // console.log(salt);  //log the salt to the console
//     bcrypt.hash("mypassword", salt, function(err, hash) { // hashing the password  $2b$10$hfis7MWp2iRf1u17mZmiaeTcxHaLS9JRYecRY.4KmvQkR9UckioEO
//         console.log(hash);  //log the hash to the console
//     });
// });
// });

// app.get('/', (req, res) => {
//     bcrypt.compare('mypassword', '$2b$10$hfis7MWp2iRf1u17mZmiaeTcxHaLS9JRYecRY.4KmvQkR9UckioEO', function (err, result) {
//            console.log(result);  // true if the password matches the hash //output - true as password matches the hash
//     });
// });

app.get('/', (req, res) => {
    let token = jwt.sign({ email: 'saravjeet@gmail.com' }, "secretkey") //signing the token with a secret key
    console.log(token);
    res.cookie('token', token); //setting the token in a cookie
    res.send('Token generated and cookie set');  //send response to the client
})

app.get('/read', (req, res) => {
    // console.log(req.cookies.token);  //reading cookies //use cookie-parser middleware to read cookies
    
    let data = jwt.verify(req.cookies.token, "secretkey") //verifying the token with the secret key
    console.log(data);  //log the data to the console
})

app.listen(3000)