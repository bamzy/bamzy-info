const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express();
require('dotenv').config();


//Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const { Client } = require("@opensearch-project/opensearch");
var host = "localhost";
var protocol = "https";
const initClient = (url,user,pass)=>{
    try{
        let auth = `${user}:${pass}`;
        return new Client({            
            node: 'http://' + auth + "@" + "kibana.bamzy.info" + ":80" ,           
            // tls: {
            //     ca: fs.readFileSync('./http_ca.crt'),
                rejectUnauthorized: false
            // }
        });
    } catch (err){
        console.log('err'+ err.message);
    }

}
// const { Client } = require('@elastic/elasticsearch')
app.get('/ping',async (req,res)=> {

    try {
        let client = initClient(process.env.elasticURL,process.env.elasticUserName,process.env.elasticPassword,)
        client.ping({
            requestTimeout: 1000
        }, err => {
            if (err) {
                console.error(err)
                process.exit(1)
            }
        })


    } catch (err){
        res.status(500).send("Error1: " +err.message)
    }
});
app.get('/test', async (req,res)=>{
    try {
        
        let client = initClient(process.env.elasticURL,process.env.elasticUserName,process.env.elasticPassword,)
        var query = {
            query: {
              match: {
                ip: {
                  query: "110.248.232.101",
                },
              },
            },
          };
          
          var result = await client.search({
            index: 'kibana_sample_data_logs',
            body: query,
          });
          

        
        // console.log(`test endpoint called and returned ${result.body.hits.length} results` )

        res.json(result.body.hits.hits)

    } catch (err){
        res.status(500).send("Error: " +err.message)
    }

})



module.exports = {app}
