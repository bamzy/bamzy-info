const {decode} = require('./decode');
const {sign} = require('./sign');

describe('test decoding',()=>{    
   test('should return the original value in the payload',()=>{
        const secret = 'abc'
        const jwt = sign({payload:{name:'Bamdad'},secret:secret})
        const decoded = decode(jwt);  
        expect(decoded.name).toEqual('Bamdad');
    })
    test('should return the original value in the payload',()=>{
        const secret = 'abc'
        const specialName = '[]/;\']@#$%^&*()';
        const jwt = sign({payload:{name:specialName},secret:secret})
        const decoded = decode(jwt);  
        expect(decoded.name).toEqual(specialName);
    })

    test('check for wrong token exception',()=>{        
        const jwt = "asdfasdfasfa.fasdfasfsadf"

        try {
            decode(jwt);
        } catch (error){
            expect(error.message).toEqual("Invalid JWT Token");

        }
    })

})