const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    let path1 = path.join(__dirname,'build', 'index.html');
    console.log(path1)
    res.sendFile(path1);
});

app.listen(5000,()=>{
    console.log('working')
});