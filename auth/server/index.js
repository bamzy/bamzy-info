const express = require('express')
const {hash,compare} = require('bcryptjs')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const {verify}  = require('jsonwebtoken')
require('dotenv').config();
const {sendAccessToken,sendRefreshToken,createRefreshToken,createAccessToken} =require('./tokens');
const userController = require('./userData');

const server = express();
const port = process.env.PORT


//Middlewares
server.use(express.json());
server.use(express.urlencoded());
server.use(cookieParser());
server.use(cors());


server.get('/test',function(req,res){
    console.log("get--->"+req.body);
    res.send('test called')
})
server.post('/login',(req,res)=>{
    const {email,password} = req.body;
    try {
        const allUsers = userController.getUsers();
        const user = allUsers.find((user)=>{
            return user.email === email;
        })
        if(!user) throw new Error('User not found')
        if (!compare(user.password,password)) throw new Error('Password incorrect')
        const refreshToken = createRefreshToken(email);
        const accessToken = createAccessToken(email);
        sendRefreshToken(res,refreshToken);
        sendAccessToken(req,res,accessToken);

    } catch (error){
        res.send({message:error.message})
    }
});
server.post('/register',(req,res)=>{
    const {email,password} = req.body;
    const users = userController.getUsers();
    let foundUser = users.find(element => element.email === email)
    console.log(foundUser)
    if(foundUser!=null)  return res.send({message:'Email in use'})
    foundUser = {'email':email,'password':password};
    let refreshToken = createRefreshToken(email);
    let accessToken = createAccessToken(email);
    foundUser.refreshToken = refreshToken;
    users.push(foundUser);
    res.send({message: 'Registered Success'});
    console.log(foundUser);
});
server.get('/users',(req,res)=>{
    const users = userController.getUsers().map((element=> {
        return {email: element.email, refreshToken: element.refreshToken};
    }));
    res.json(users);
})
server.post('/logout',(_req,res)=>{
    res.clearCookie('refreshToken')
    return res.send({message: 'Logged out successfully'})
})
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
