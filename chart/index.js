const express = require('express')
require('dotenv').config();
const wordRepo = require('./wordRepo');
const axios = require('axios')
const cors = require('cors')
const server = express();
const port = process.env.PORT


//Middlewares
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

const analyze = (url,res)=>{
    axios.get(url).then((response)=>{
        res.header('Content-Type','text/html');
        let data = response.data;
        var result = data.match(/<description>(.*?)<\/description>/g).map(function(val){
            val = val.replace(/<\/?description>/g,'');
            val = val.replace('![CDATA[','');
            val = val.replace(']]','');
            val = val.replace('.','');
            val = val.replace(',','');
            val = val.replace('?','');
            val = val.replace('!','');
            val = val.replace('>','');
            val = val.replace('<','');
            val = val.replace('،','');
            val = val.replace(':','');

            return val;
        });
        let words = new Map();
        let excludedWords = wordRepo.getExcludedWords();
        for (let i = 0; i < result.length ; i++) {
            let arr = result[i].split(" ");

            for (let j = 0; j < arr.length; j++) {
                let currentWord = arr[j];
                if(excludedWords.has(currentWord)) continue;
                if(currentWord.length<=3) continue;
                if (words.get(currentWord)) words.set(currentWord,words.get(currentWord)+1);
                else words.set(currentWord,1);
            }

        }
        const sortedWords = new Map([...words.entries()].sort((a, b) => b[1] - a[1]));
        let finalArr = [...sortedWords.entries()];
        let chartResult = [];
        for(let i=0;i<finalArr.length&&i<30;i++){
            chartResult.push({x:finalArr[i][0],value:finalArr[i][1]})
        }
        res.send(chartResult);
    })
}
server.get('/analyzeBBC',(req,res)=>{

    analyze('https://feeds.bbci.co.uk/persian/rss.xml',res);
})
server.get('/analyzeIranIntl',(req,res)=>{
    analyze('https://www.iranintl.com/feed',res);
})
server.listen(port,()=>{
    console.log(`Auth Server running on port ${port}`)
});
