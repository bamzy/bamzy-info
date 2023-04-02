require('dotenv').config();
const port = process.env.PORT
const {app} = require('./chartAPI')
app.listen(port,async ()=>{
    console.log(`Chart Server running on port ${port}`)
});
