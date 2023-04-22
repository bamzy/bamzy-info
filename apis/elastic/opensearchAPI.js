const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express();
require('dotenv').config();


//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const { Client } = require("@opensearch-project/opensearch");
const initClient = (url,user,pass)=>{
  let usedURL =  url.substring(8);
    try{
        let auth = `${user}:${pass}`;
        return new Client({            
            node: 'https://' + auth + "@" + usedURL ,           
        });

        
    } catch (err){
        console.log('err'+ err.message);
    }
}
app.post('/insertDoc',async (req,res)=> {
    try {
        let client = initClient(process.env.elasticURL,process.env.elasticUserName,process.env.elasticPassword,)
        let document = req.body.document;
        let indexName = req.body.indexName;   
        console.log(document)
        var result = await client.index({
          index: indexName,
          body: document,
          refresh: true,
        });
        console.log(result)
        res.status(200).json(result.body);
        
    } catch (err){
        res.status(500).send("Error: " +err.message)
    }
});

app.get('/describe',async (req,res)=> {
    try {
        let client = initClient(process.env.elasticURL,process.env.elasticUserName,process.env.elasticPassword,)
        let indexName = req.body.indexName;  
        var result = await client.indices.getMapping({
          index: indexName,
        });
        console.log(result)
        res.status(200).json(result.body);
        
    } catch (err){
        res.status(500).send("Error: " +err.message)
    }
});

app.get('/list',async (req,res)=> {
    try {
        let client = initClient(process.env.elasticURL,process.env.elasticUserName,process.env.elasticPassword,)
        let indexName = req.body.indexName;  
        var result = await client.indices.getMapping({
          index: indexName,
        });
        res.status(200).json(result.body);
        
    } catch (err){
        res.status(500).send("Error: " +err.message)
    }
});

app.get('/search',async (req,res)=> {
  try {
      let client = initClient(process.env.elasticURL,process.env.elasticUserName,process.env.elasticPassword,)
      let indexName = req.body.indexName;  
      let bodyQuery = req.body.query;  
      
      var query = {
        query: bodyQuery,
      };
      var result = await client.search({
        index: indexName,
        body: query,
      });
      res.status(200).json(result.body.hits);
      
  } catch (err){
      res.status(500).send("Error: " +err.message)
  }
});

app.post('/createIndex',async (req,res)=> {
  try {
      let client = initClient(process.env.elasticURL,process.env.elasticUserName,process.env.elasticPassword,)
      let indexName = req.body.indexName;  
      var settings = {
        settings: {
          index: {
            number_of_shards: 1,
            number_of_replicas: 1,
          },
        },
      };

    var result = await client.indices.create({
      index: indexName,
      body: settings,
    });
      res.status(200).json(result);
      
  } catch (err){
      res.status(500).send("Error: " +err.message)
  }
});
app.get('/healthCheck', async (req,res)=>{
    try {
        
        let client = initClient(process.env.elasticURL,process.env.elasticUserName,process.env.elasticPassword,)
        var result = await client.cluster.health(); 
        res.json(result.body)
    } catch (err){
        res.status(500).send("Error: " +err.message)
    }

})



module.exports = {app}
