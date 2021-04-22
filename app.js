const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();


app.get('/api', (req, res) => {
    res.json({
        message: "Welcome to the API"
    });
});

//create the route to protect 
app.post('/api/posts', (req, res) => {
    res.json({
        message: 'Post created...'
    });

});

//Get the token
app.post('/api/login', (req, res) => {
    //Mock user 
    const user = {
        id: 1,
        username: "foushware",
        email: 'foush@foushware.com'
    }
    jwt.sign({ user: user }, 'secretkey', (err, token) => {
        res.json({
            token: token
        });
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server run on port ${PORT} `));