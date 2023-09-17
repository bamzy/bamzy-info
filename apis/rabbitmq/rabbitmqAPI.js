const express = require('express')
const cors = require('cors')
const amqp = require('amqplib/callback_api');
const app = express();
require('dotenv').config();


//Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
let connectionInfo = {connection:null,channels: new Map()}

const initClient = (user,pass,domain,q,callback)=>{
    try{
        if(connectionInfo.connection!=null&& connectionInfo.channels.has(q)) {
            callback(connectionInfo.connection,connectionInfo.channels.get(q));
            return;
        } 
        console.log(connectionInfo);
        let url  = `amqp://${user}:${pass}@${domain}`;
        console.log(url);
        amqp.connect(url, function(error0, connection) {
            if (error0) {
                throw error0;
            }
            connectionInfo.connection = connection;
            connection.createChannel(function(error1, channel) {
                if (error1) {
                throw error1;
                }
                var queue = q;
                

                channel.assertQueue(queue,{
                durable: false
                });
                connectionInfo.channels.set(q,channel);
                callback(connection,channel)
                
                
            });
        });
    } catch (err){
        console.log('err '+ err.message);
    }

}

app.get('/publish',async (req,res)=> {

    try {
        let qname = "secondQueue";
        let client = initClient(process.env.RabbitMQ_user,process.env.RabbitMQ_password,process.env.url,qname,async (connection,channel)=>{
            for(i=0;i<100;i++){

                var msg = 'random Hello world ' +  Math.floor(Math.random() * 1000);;
                channel.sendToQueue(qname, Buffer.from(msg));
                await new Promise(r => setTimeout(r, 150));
                // console.log(" [x] Sent %s \n", msg);
                res.write(msg);
            }
            res.end();
        })
        


    } catch (err){
        res.status(500).send("Error1: " +err.message)
    }
});

app.get('/register',async (req,res)=> {
    let ref = null;
    try {
        let qname = "secondQueue";
        let client = initClient(process.env.RabbitMQ_user,process.env.RabbitMQ_password,process.env.url,qname,(connection,channel)=>{
            channel.consume(qname, function(msg) {
                
                if(ref!=null) clearTimeout(ref)
                res.write(msg.content.toString());
                // console.log(" [x] Received %s", msg.content.toString());
                ref = setTimeout(()=>{res.end();connection.close();},2000)
              }, {
                  noAck: false
                });
            res.write("registered to listen");
        })
        


    } catch (err){
        res.status(500).send("Error1: " +err.message)
    }
});

module.exports = {app}
