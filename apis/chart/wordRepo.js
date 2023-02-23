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
    return map;
}
const textCleanup = (val) => {
    return val.replace(/[`~!@#$%^*()_|+\-=?;:'",.<>\{\}\[\]\\\/a-zA-Z]/gi, '');
    /*val = val.replace(/<\/?description>/g,'');
    val = val.replace('![CDATA[','');
    val = val.replace(']]','');
    val = val.replace('<div>','');
    val = val.replace('</div>','');
    val = val.replace('.','');
    val = val.replace(',','');
    val = val.replace('،','');
    val = val.replace('?','');
    val = val.replace(':','');
    val = val.replace('!','');
    val = val.replace('>','');
    val = val.replace('<','');
    val = val.replace('،','');
    val = val.replace(':','');
    val = val.replace('<img','');
    val = val.replace('»','');
    val = val.replace('«','');
    return val;*/
}

module.exports = { getExcludedWords, textCleanup}


