const express = require('express')
const bcryptjs = require('bcryptjs')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const jwt  = require('jsonwebtoken')
require('dotenv').config();
const port = process.env.PORT
const server = express();

const user = require('./User');


//Middlewares
server.use(express.json());
server.use(express.urlencoded());
server.use(cookieParser());
server.use(cors());


server.get('/test',function(req,res){
    console.log("get--->"+req.body);
    res.send('test called')
})
server.post('/test',(req,res)=>{
    console.log("post header--->"+JSON.stringify(req.headers));
    console.log("post body--->"+req.body.somekeybody);
    res.send('test called')
});
server.post('/register',(req,res)=>{
    const {email,password} = req.body;
    const users = user.getUsers();
    const foundUser = users.find(element => element.email === email)
    if(!foundUser) users.add({'email':email,'password':password});
    let refreshToken = jwt.sign({'email':email},process.env.REFRESH_TOKEN_SECRET,{'expiresIn':'1h'});
    res.cookie('refreshtoekn',refreshToken);
    res.send('ok|'+ refreshToken);
    console.log(foundUser);
});

server.get('/html',(req,res)=>{
    res.header('Content-Type','text/html')
    res.send('<html>' +
        '<header>' +
            '<script src="https://www.google-analytics.com/analytics.js"></script>' +
        '</header>'+
        '<body>' +
            'Sanity HTML check' +
            '<img src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png">'+
        '</body>' +
        '</html>');
});
server.listen(port,()=>{
    console.log(`Auth Server running on port ${port}`)
});
