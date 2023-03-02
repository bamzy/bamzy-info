const express = require('express')
require('dotenv').config();
const {scrapeRssFeed} = require('./wordRepo');
const {analyzeTelegramChannel} = require('./telegram');
const {NewsSource} = require('./modules/NewsSource');
const axios = require('axios')
const cors = require('cors')
const server = express();
const port = process.env.PORT


//Middlewares
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());


server.get('/analyzeBBC',(req,res)=>{

    scrapeRssFeed('https://feeds.bbci.co.uk/persian/rss.xml',res);
})
server.get('/analyzeIranIntl',(req,res)=>{
    scrapeRssFeed('https://www.iranintl.com/feed',res);
})
server.get('/analyzeRadioFarda',(req,res)=>{
    scrapeRssFeed('https://www.radiofarda.com/api/zrttpoeuoupo',res);
})
server.get('/analyzeTasnim',(req,res)=>{
    scrapeRssFeed('https://www.tasnimnews.com/fa/rss/feed/0/8/0/%D9%85%D9%87%D9%85%D8%AA%D8%B1%DB%8C%D9%86-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1',res);
})
server.get('/analyzeShargh',(req,res)=>{
    scrapeRssFeed('https://www.sharghdaily.com/feeds/',res);
})
server.get('/analyzeFarsnews',(req,res)=>{
    scrapeRssFeed('https://www.farsnews.ir/rss/chosennews',res);
})
server.get('/analyzeEtemad',(req,res)=>{
    scrapeRssFeed('https://www.etemadnewspaper.ir/fa/rss',res);
})
server.get('/analyzeVarzesh3',(req,res)=>{
    scrapeRssFeed('https://www.varzesh3.com/rss/all',res);
})
server.get('/analyzeTelegramChannel/:channelName',(req,res)=>{
    let channelName = req.params['channelName'];
    console.info(channelName);

    analyzeTelegramChannel(res,channelName)
})
server.listen(port,async ()=>{
    console.log(`Chart Server running on port ${port}`)
});
server.get('/getAllDatabases',async (req,res)=>{
    let ns = new NewsSource();
    let dbs = await ns.getAllDatabases();
    res.send({...dbs})
})
server.get('/getAllCollections/:dbName',async (req,res)=>{
    const dbName = req.params['dbName'];
    let ns = new NewsSource();
    let cols = await ns.getAllCollections(dbName);
    console.log(cols);
    res.send(cols)
})
server.get('/findAll',async (req,res)=>{
    let ns = new NewsSource();
    console.log(ns.getDBName());
    // return;
    // let resi= await ns.insertNewsSource({name:'BBC English',type:'RSS'});
    // console.log('insert-->'+resi);
    let result = await ns.findAllNewsSource({type:'RSS'});
    console.log('findAll-->'+result);
    res.send(result)
})