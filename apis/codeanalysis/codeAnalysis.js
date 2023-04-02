const { exec } = require("child_process");
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
app.use(cors());
let port = process.env.PORT;
const baseDir=process.env.BASE_DIR
app.get('/codestats', function (req, res) {
    exec(`cd ${baseDir} && npx cloc . --exclude-dir=node_modules --quiet `, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            res.status(500).send(error.message)
            return;
        } else {

            res.status(200).send(parseStatsTable(stdout))
            console.log(`stderr: ${stdout}`);
        }
    });

})

const parseStatsTable = (text)=>{
    let lines = text.split('\n')
    let dataLines = lines.filter((value)=>{
        // console.log('|'+value+'|')
        if(value.includes("----") || value.length===0) {
            // console.log('not real line')
            return false;
        }
        else return true;
    })

    console.log('size of datalines:'+dataLines.length)
    let removedSpaceLines = dataLines.map((line)=>{
        let reg  = /\s+/g
        let tmp = line.replace(reg,' ');
        return tmp;
    })
    const msg = removedSpaceLines[0];
    const headers = removedSpaceLines[1].split(' ')
    let sums = removedSpaceLines[1].split(' ')
    sums  = {files:sums[1],blank:sums[2],comment:sums[3],code:sums[4]};
    const items = [];
    for (i=2;i<removedSpaceLines.length-1;i++){
        let item = removedSpaceLines[i].split(' ');
        let tmp = {}
        for(j=0;j<item.length;j++){
            tmp[headers[j]]=item[j];
        }
        items.push(tmp);
    }
    return {msg:msg,items:items,sum:sums}

}

module.exports = {parseStatsTable,app}