const {NewsSource} = require('../modules/NewsSource');
class NewsSourceSeeder {
    run(){
        let ns  = new NewsSource();
        ns.insertMultiNewsSource([
            {name:'BBC Persian',altName:'بی بی سی فارسی',src_type:'RSS',url:'https://feeds.bbci.co.uk/persian/rss.xml'},
            {name:'Iran International',altName:'ایران اینترنشنال',src_type:'RSS',url:'https://www.iranintl.com/feed'},
            {name:'Radio Farda',altName:'رادیو فردا',src_type:'RSS',url:'https://www.radiofarda.com/api/zrttpoeuoupo'},
            {name:'Tasnim News',altName:'خبرگزاری تسنیم',src_type:'RSS',url:'https://www.tasnimnews.com/fa/rss/feed/0/8/0/%D9%85%D9%87%D9%85%D8%AA%D8%B1%DB%8C%D9%86-%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1'},
            {name:'Shargh Daily News',altName:'روزنامه شرق',src_type:'RSS',url:'https://www.sharghdaily.com/feeds/'},
            {name:'Fars News',altName:'خبرگزاری فارس',src_type:'RSS',url:'https://www.farsnews.ir/rss/chosennews'},
            {name:'Etemad News',altName:'روزنامه اعتماد',src_type:'RSS',url:'https://www.etemadnewspaper.ir/fa/rss'},
            {name:'Varzesh News',altName:'ورزش 3',src_type:'RSS',url:'https://www.varzesh3.com/rss/all'},
            {name:'Vahid Online',altName:'وحید آنلاین',src_type:'Telegram',url:'VahidOnline'},
            {name:'Bidarzani',altName:'بیدارزنی',src_type:'Telegram',url:'Bidarzani'},
        ])
    }
}