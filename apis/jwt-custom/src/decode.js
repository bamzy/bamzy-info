function decode(token){
    const parts = token.split(".");
    if (parts.length !== 3) throw Error('Invalid JWT Token');
    const body  = JSON.parse(Buffer.from(parts[1],'base64'));
    
    return body;
}
module.exports = {decode}