const express = require('express')
const cors = require('cors')
const amqp = require('amqplib/callback_api');
const app = express();
require('dotenv').config();


//Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


const initClient = (user,pass)=>{
    try{
        let url  = `amqp://${user}:${pass}@api-rabbitmq.bamzy.info`;
        console.log(url);
        amqp.connect(url, function(error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function(error1, channel) {
                if (error1) {
                throw error1;
                }
                var queue = 'hello';
                var msg = 'Hello world';

                channel.assertQueue(queue,{
                durable: false
                });

                channel.sendToQueue(queue, Buffer.from(msg));
                console.log(" [x] Sent %s", msg);
            });
        });
    } catch (err){
        console.log('err'+ err.message);
    }

}

app.get('/send',async (req,res)=> {

    try {
        let client = initClient(process.env.RabbitMQ_user,process.env.RabbitMQ_password)
        console.log('hi');


    } catch (err){
        res.status(500).send("Error1: " +err.message)
    }
});

module.exports = {app}
