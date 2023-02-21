const getExcludedWords = ()=>{
    let map = new Map();
    map.set('است');
    map.set('برای');
    return map;
}
module.exports = { getExcludedWords}


