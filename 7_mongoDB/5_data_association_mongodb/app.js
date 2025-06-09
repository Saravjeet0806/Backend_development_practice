const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

app.get('/create', async (req, res) => {
    let user = await userModel.create({
        username: 'JohnDoe',
        age: 30,
        email: "abc@gmail.com"
    })
    res.send(user);
})

app.get('/post/create', async (req, res) => {
    let post = await postModel.create({
        postdata: "hello this is a post",
        user: "684703671fb93fed487da78b" // user ka id jo post ke sath associate karna hai
    })

    let user = await userModel.findById("684703671fb93fed487da78b");
    user.post.push(post._id); //user ke pass post ka id add karna
    await user.save()

    res.send({post, user})
})

app.listen(3000)