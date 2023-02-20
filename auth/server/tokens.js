require('dotenv').config();
const {sign} = require('jsonwebtoken')
const sendRefreshToken = (res,refreshToken) => {
    res.cookie('refreshToken',refreshToken,{httpOnly:true,path:'/refresh_token'});
}

const sendAccessToken = (req,res,accessToken)=>{
    res.send({accessToken,email:req.body.email});
}
const createRefreshToken = email => {
    return sign({email: email},process.env.REFRESH_TOKEN_SECRET,{expiresIn: '2d'})
}
const createAccessToken = email => {
    return sign({email: email},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '10m'})
}
module.exports = {sendAccessToken,sendRefreshToken,createAccessToken,createRefreshToken};