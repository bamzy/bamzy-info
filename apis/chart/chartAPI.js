const express = require('express')

const {scrapeRssFeed} = require('./wordRepo');
const {analyzeTelegramChannel} = require('./telegram-api');
const {NewsSource} = require('./modules/NewsSource');
const cors = require('cors')
const app = express();


//Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use((req, res, next) => {
    next()
})
app.get('/analyzeBBC',async (req,res)=>{

    scrapeRssFeed('https://feeds.bbci.co.uk/persian/rss.xml',res);
})
app.get('/analyzeIranIntl',(req,res)=>{
    scrapeRssFeed('https://www.iranintl.com/feed',res);
})
app.get('/analyzeRadioFarda',(req,res)=>{
    scrapeRssFeed('https://www.radiofarda.com/api/zrttpoeuoupo',res);
})
app.get('/analyzeTasnim',(req,res)=>{
    scrapeRssFeed('https://www.tasnimnews.com/fa/rss/feed/0/8/0/%D9%85%D9%87%D9%85%D8%AA%D8%B1%DB%8C%D9%86-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1',res);
})
app.get('/analyzeShargh',(req,res)=>{
    scrapeRssFeed('https://www.sharghdaily.com/feeds/',res);
})
app.get('/analyzeFarsnews',(req,res)=>{
    scrapeRssFeed('https://www.farsnews.ir/rss/chosennews',res);
})
app.get('/analyzeEtemad',(req,res)=>{
    scrapeRssFeed('https://www.etemadnewspaper.ir/fa/rss',res);
})
app.get('/analyzeVarzesh3',(req,res)=>{
    scrapeRssFeed('https://www.varzesh3.com/rss/all',res);
})
app.get('/analyzeTelegramChannel/:channelName',(req,res)=>{
    let channelName = req.params['channelName'];
    console.info(channelName);

    analyzeTelegramChannel(res,channelName)
})
app.get('/getAllDatabases',async (req,res)=>{
    let ns = new NewsSource();
    let dbs = await ns.getAllDatabases();
    res.send({...dbs})
})
app.get('/getAllCollections/:dbName',async (req,res)=>{
    const dbName = req.params['dbName'];
    let ns = new NewsSource();
    let cols = await ns.getAllCollections(dbName);
    console.log(cols);
    res.send(cols)
})
app.get('/findAll',async (req,res)=>{
    let ns = new NewsSource();
    console.log(ns.getDBName());
    let result = await ns.findAllNewsSource({type:'RSS'});
    console.log('findAll-->'+result);
    res.send(result)
})
app.get('/user:userid',(req,res)=>{
    console.log(req.params);
    res.send(req.params['userid'])
})

module.exports = {app}
