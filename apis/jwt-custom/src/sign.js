const crypto = require('crypto')
const defaultOptions = {
    expiresIn: 6*60*1000 //default expiry is in 6 hours
}
function sign({payload,secret,options={}}){
    const mergedOptions = {...defaultOptions,...options}
    const header = {alg:'HS256',type:'JWT'}

    b64encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64');
    mergedOptions.expiresIn = Date.now()+mergedOptions.expiresIn;

    b64encodedBody = Buffer.from(JSON.stringify({...payload,exp:mergedOptions.expiresIn})).toString('base64');

    const b64encodedSignature = createSignature(secret,b64encodedHeader,b64encodedBody);
    const result = `${b64encodedHeader}.${b64encodedBody}.${b64encodedSignature}`
    return result;
}

function createSignature(secret,encodedHeader,encodedBody){
    const signature = crypto.createHmac('sha256',secret).update(encodedHeader+'.'+encodedBody)
    const res = signature.digest('base64');    
    return res;

}
module.exports = {sign,createSignature}