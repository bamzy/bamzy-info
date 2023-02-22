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
    return map;
}
module.exports = { getExcludedWords}


