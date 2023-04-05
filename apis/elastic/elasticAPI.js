const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express();
require('dotenv').config();


//Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


const initClient = (url,user,pass)=>{
    return new Client({
        node: url,
        auth: {
            username: user,
            password: pass
        },
        tls: {
            // ca: fs.readFileSync('./http_ca.crt'),
            rejectUnauthorized: false
        }
    });

}
const { Client } = require('@elastic/elasticsearch')
app.get('/ping',async (req,res)=> {

    let client = initClient(process.env.elasticURL,process.env.elasticUserName,process.env.elasticPassword,)
    try {
        client.ping({
            requestTimeout: 1000
        }, err => {
            if (err) {
                console.error(err)
                process.exit(1)
            }
        })


    } catch (err){
        res.send(err.message)
    }
});
app.get('/test', async (req,res)=>{
    let client = initClient(process.env.elasticURL,process.env.elasticUserName,process.env.elasticPassword,)
    try {
        const result= await client.search({
            index: 'overseas-trade',
            query: {
                match: { STATUS: 'FINAL' }
            }
        })
        console.log(`test endpoint called and returned ${result.hits.hits.length} results` )

        res.json(result.hits.hits)

    } catch (err){
        console.log(err.message)
    }

})



module.exports = {app}
