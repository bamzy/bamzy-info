require('dotenv').config();
const port = process.env.PORT
const {app} = require('./opensearchAPI')
app.listen(port,async ()=>{
    console.log(`elasticAPI Server running on port ${port}`)
});
