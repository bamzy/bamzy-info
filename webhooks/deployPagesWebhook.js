const express = require('express')
const bodyParser = require('body-parser')
const { exec } = require("child_process");
require('dotenv').config();
const {verifyGithubWebhookPostData} = require('./auth')
const {downloadS3Artifact} = require('./aws')
const {moveFolder} = require('./filesystem')

let port = process.env.PORT;
const app = express()

// Saves a valid raw JSON body to req.rawBody
app.use(bodyParser.json({
    verify: (req, res, buf, encoding) => {
        if (buf && buf.length) {
            req.rawBody = buf.toString(encoding || 'utf8');
        }
    },
}))

app.post('/deploy', verifyGithubWebhookPostData, function (req, res) {

    var msg = ""
    exec("sh ~/deploy.sh", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            msg = error.message;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            msg += "|" + stderr;
        }
        console.log(`stdout: deployed successfully at` + Date.now());

    });
    res.status(200).send(msg);

})
app.use((err, req, res, next) => {
    if (err) console.error(err);
    res.status(403).send('Request body was not signed or verification failed')
})

app.get('/s3Download',(req,res)=> {
    let buildNumber = req.query['buildNumber'];
    try {
        downloadS3Artifact(buildNumber,'./data/artifact.tar.gz','./data/extracted/');
        moveFolder('./data/extracted/',process.env.DEPLOY_PATH);
        res.status(200).send('Finished successfully');
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.listen(port, () => console.log(`Listening deployWebhook on port ${port}`))

module.exports = app;