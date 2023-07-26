require('dotenv').config();
const port = process.env.PORT
const {app} = require('./rabbitmqAPI')
app.listen(port,async ()=>{
    console.log(`RabbitMQ Server running on port ${port}`)
});
