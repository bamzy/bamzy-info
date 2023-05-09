
const {sign} = require('./sign');

describe("Test the JWT Signing of some data", () => {


   test('should produce diff signature for same payload but diff secret',()=>{
        const secret = 'abc'
        const jwt1 = sign({payload:{name:'Bamdad'},secret:secret,options :{expiresIn:  10*60*1000 }}).split('.')[2]
        const jwt2 = sign({payload:{name:'Bamdad'},secret: secret+'123',options :{expiresIn:  10*60*1000 }}).split('.')[2]
      
        expect(jwt1).not.toEqual(jwt2);
   })

   test('should produce diff signature for same payload + same secret but diff exp date',()=>{
      const secret = 'abc'
      const jwt1 = sign({payload:{name:'Bamdad'},secret:secret,options :{expiresIn:  10*60*1000 }}).split('.')[2]
      const jwt2 = sign({payload:{name:'Bamdad'},secret: secret,options :{expiresIn:  12*60*1000 }}).split('.')[2]
      
      expect(jwt1).not.toEqual(jwt2);
   })

   test('should produce diff data when everything is identical because of the current timestamp',async()=>{
      const secret = 'abc'
      const jwt1 = sign({payload:{name:'Bamdad'},secret:secret,options :{expiresIn:  10*60*1000 }}).split('.')[2]
      await sleep(1);
      const jwt2 = sign({payload:{name:'Bamdad'},secret: secret,options :{expiresIn:  10*60*1000 }}).split('.')[2]
      
      expect(jwt1).not.toEqual(jwt2);
   })

   test('decoded payload should contain a numerical timestamp',()=>{
      const secret = 'abc'
      const jwt1 = sign({payload:{name:'Bamdad'},secret:secret,options :{expiresIn:  10*60*1000 }}).split('.')[1]
         
      const jsonData = JSON.parse(Buffer.from(jwt1, 'base64'));   
      expect(typeof jsonData.exp).toBe('number');
   })


});
async function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}