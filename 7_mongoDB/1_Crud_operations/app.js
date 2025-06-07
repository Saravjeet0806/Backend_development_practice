const express = require('express');
const app = express();
const userModel = require('./usermodel');  // Importing the user model from usermodel.js

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async (req, res) => {
    let createUser = await userModel.create({  // Create a new user in the database
        name: 'John Doe',
        email: 'john@gmail.com',
        age: 30
    });
    res.send(createUser);
})

app.get('/update', async (req, res) => {
    let updateUser = await userModel.findOneAndUpdate({name: 'John Doe'}, {name: 'John Mark'}, {new: true});  // Update the user's name , first parameter is the filter, second is the update, and third is an option to return the updated document
    res.send(updateUser);
})

app.get('/read', async (req, res) => {
    let users = await userModel.find({});  // Read all users from the database
    // let users = await userModel.find({username: 'John Mark'});  // Read users with a specific username
    res.send(users);
})

app.get('/delete', async (req, res) => {
    let deleteUser = await userModel.findOneAndDelete({name: 'John Mark'});  // Delete a user by name
    res.send(deleteUser);
})

app.listen(3000)