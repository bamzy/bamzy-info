const {decode} = require('./decode');
const {sign} = require('./sign');
const {verify} = require('./verify');

describe('test verify',()=>{    
   test('verify a basic signature is correct',()=>{
        const secret = 'abc'
        const jwt = sign({payload:{name:'Bamdad'},secret:secret})
        const verified = verify(jwt,secret);  
        expect(verified).toEqual(true);
    })

    test('verify that wrong secret will fail ',()=>{
        const secret = 'abc'
        const jwt = sign({payload:{name:'Bamdad'},secret:secret})
        const verified = verify(jwt,secret+'a');  
        expect(verified).not.toEqual(true);
    })
    
    

})