const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();






// Verify Token  ✅ ❌
const verifyToken = (req, res, next) => {
    // Get auth header value [token]

    const bearHeader = req.headers['authorization'];
    //Check if th bearer is undefined 
    if (typeof bearHeader !== 'undefined') {

        // Format of token
        // Authorization: Bearer <access_token>

        //split on the space 
        const bearer = bearHeader.split(' ');
        // Get the token from array 
        const bearToken = bearer[1];
        //Set the token
        req.token = bearToken;
        // Next middleware
        next();

    } else {
        // Forbidden 
        res.sendStatus(403); // undefined
    }

}

// ...........  Routes 🚦 🚥   ................


app.get('/api', (req, res) => {
    res.json({
        message: "Welcome to the API"
    });
});

//create the route to protect 
app.post('/api/posts', verifyToken, (req, res) => {
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