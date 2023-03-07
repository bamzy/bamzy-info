const axios = require("axios");
const getExcludedWords = ()=>{
    let map = new Map();
    map.set('است');
    map.set('برای');
    map.set('ایران');
    map.set('است.');
    map.set('دیگر');
    map.set('جمهوری اسلامی');
    map.set('امروز');
    map.set('کرده');
    map.set('کرد');
    map.set('کردن');
    map.set('کردند');
    map.set('دارد');
    map.set('آنها');
    map.set('بیشتر');
    map.set('باید');
    map.set('دارند');
    map.set('شد');
    map.set('می دهد');
    map.set('دادن');
    map.set('باعث');
    map.set('آن‌ها');
    map.set('همچنین');
    map.set('کنید');
    map.set('اینجا');
    map.set('کلیک');
    map.set('بوده');
    map.set('رسیده');
    map.set('شد');
    map.set('خواهد');
    map.set('بخوانید');
    map.set('جمهوری اسلامی');
    map.set('درباره');
    map.set('درحالی');
    map.set('هستند');
    map.set('تاکنون');
    map.set('دنبال');
    map.set('درباره');
    map.set('خبر');
    map.set('خبرها');
    map.set('می‌کند');
    map.set('درحالی');
    map.set('نشده');
    map.set('برخی');
    map.set('اسلامی');
    map.set('جمهوری');
    return map;
}
const removeSpecialCharacters = (val) => {
    return val.replace(/[،،»«`~!@#$%^*()_|+\-=?;:'",.<>\{\}\[\]\\\/a-zA-Z0-9]/gi, '');

}
const extractRawRSSText = (fullText) => {
    return fullText.match(/<description>(.*?)<\/description>/g).map(function (newsEntry) {
        return removeSpecialCharacters(newsEntry);
    });
}
const finalizeText = (newsTextArr) => {

    let words = new Map();
    let excludedWords = getExcludedWords();
    for (let i = 0; i < newsTextArr.length ; i++) {
        let arr = newsTextArr[i].split(" ");

        for (let j = 0; j < arr.length; j++) {
            let currentWord = arr[j];
            if(excludedWords.has(currentWord)) {
                // console.log("this word was found:"+ currentWord);
                continue;
            }
            if(currentWord.length<=3) continue;
            if (words.get(currentWord)) words.set(currentWord,words.get(currentWord)+1);
            else words.set(currentWord,1);
        }

    }
    const sortedWords = new Map([...words.entries()].sort((a, b) => b[1] - a[1]));
    let finalArr = [...sortedWords.entries()];
    let chartResult = [];
    for(let i=0;i<finalArr.length&&i<75;i++){
        chartResult.push({x:finalArr[i][0],value:finalArr[i][1]})
    }
    return chartResult;
}
const scrapeRssFeed = (url,res)=>{
    axios.get(url).then((response)=>{
        res.header('Content-Type','text/html');
        let fullText = response.data;
        let rawTextArr = extractRawRSSText(fullText);
        let chartResult = finalizeText(rawTextArr);
        res.send(chartResult);
    }).catch(function (error) {
        res.send(
            [
                {x:'Please',value:10},
                {x:'Try',value:10},
                {x:'Again',value: 20},
                {x:'Error',value:50},
                {x:error.message,value:25}
            ]
        );
    })
}
module.exports = { scrapeRssFeed, getExcludedWords, removeSpecialCharacters,finalizeText, extractRawRSSText}


