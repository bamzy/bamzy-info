const {createSignature} = require('./sign');
const {decode} = require('./decode');
function verify(token,secret){
    const parts = token.split(".");
    if (parts.length !==3) throw new Error('Invalid JWT Token')
    const newSig = createSignature(secret,parts[0],parts[1])
    if(newSig!==parts[2]) return false;
    const decoded = decode(token);
    const now = Date.now();
    if(now>decoded.exp) throw Error('Token Expired')

    return true;

}
module.exports = {verify}