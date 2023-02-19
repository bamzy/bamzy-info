const crypto = require('crypto')
const express = require('express')
const bodyParser = require('body-parser')
const { exec } = require("child_process");
require('dotenv').config();
const secret = process.env.DEPLOY_SECRET;

// For these headers, a sigHashAlg of sha1 must be used instead of sha256
// GitHub: X-Hub-Signature
// Gogs:   X-Gogs-Signature
let port = 5000;
const sigHeaderName = 'X-Hub-Signature-256'
const sigHashAlg = 'sha256'

const app = express()

// Saves a valid raw JSON body to req.rawBody
// Credits to https://stackoverflow.com/a/35651853/90674
app.use(bodyParser.json({
    verify: (req, res, buf, encoding) => {
        if (buf && buf.length) {
            req.rawBody = buf.toString(encoding || 'utf8');
        }
    },
}))

function verifyPostData(req, res, next) {
    if (!req.rawBody) {
        return next('Request body empty')
    }
    const sig = Buffer.from(req.get(sigHeaderName) || '', 'utf8')
    const hmac = crypto.createHmac(sigHashAlg, secret)
    const digest = Buffer.from(sigHashAlg + '=' + hmac.update(req.rawBody).digest('hex'), 'utf8')
    if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
        return next(`Request body digest (${digest}) did not match ${sigHeaderName} (${sig})`)
    }

    return next()
}

app.post('/deploy', verifyPostData, function (req, res) {
    res.status(200).send('Request body was signed')
    exec("sh ~/deploy.sh", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: deployed successfully at` + Date.now());
    });

})
app.use((err, req, res, next) => {
    if (err) console.error(err)
    res.status(403).send('Request body was not signed or verification failed')
})

app.listen(port, () => console.log("Listening on port 5000"))
