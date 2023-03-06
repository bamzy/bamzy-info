const { exec } = require("child_process");
const express = require('express')
const app = express()
require('dotenv').config();
let port = process.env.PORT;
const baseDir=process.env.BASE_DIR
app.get('/codestats', function (req, res) {
    exec(`cd ${baseDir} && npx cloc . --exclude-dir=node_modules --quiet `, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            res.status(500).send(error.message)
            return;
        } else {

            res.status(200).send(stdout)
            console.log(`stderr: ${stdout}`);
        }
    });

})
app.listen(port, () => console.log(`Listening CodeAnalyzer on port ${port}`))
