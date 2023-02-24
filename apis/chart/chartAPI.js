const express = require('express')
require('dotenv').config();
const {getExcludedWords,textCleanup,finalizeText,extractRssText} = require('./wordRepo');
const {analyzeTelegramChannel} = require('./telegram');
const axios = require('axios')
const cors = require('cors')
const server = express();
const port = process.env.PORT


//Middlewares
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

const scrapeRssFeed = (url,res)=>{
    axios.get(url).then((response)=>{
        res.header('Content-Type','text/html');
        let fullText = response.data;
        let rawTextArr = extractRssText(fullText);
        let chartResult = finalizeText(rawTextArr);
        res.send(chartResult);
    })
}
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
server.get('/analyzeTelegramChannel/:channelName',(req,res)=>{
    let channelName = req.params['channelName'];
    console.info(channelName);
    analyzeTelegramChannel(res,channelName)
})
server.listen(port,()=>{
    console.log(`Chat Server running on port ${port}`)
});
