const crypto = require('crypto')
const express = require('express')
const bodyParser = require('body-parser')
const AWS = require('aws-sdk');
const fs = require('fs');
const fse = require('fs-extra');
const decompress = require('decompress');
const decompressTargz = require('decompress-targz');
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

var s3 = new AWS.S3();

const bucketName = process.env.BUCKET_NAME;
const accesskey = process.env.AWS_ACCESS_KEY_ID;
const secretkey = process.env.AWS_SECRET_ACCESS_KEY;


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
        console.log('log to see in pm2');
        console.log(`stdout: deployed successfully at` + Date.now());
    });

})
app.use((err, req, res, next) => {
    if (err) console.error(err)
    res.status(403).send('Request body was not signed or verification failed')
})

app.get('/s3Download',  (req,res)=>{
    // download the file via aws s3 here
    var fileKey = req.query['fileKey'];
    var fullFilePath = `react-ui/${fileKey}/react-ui-artifact-${fileKey}.tar.gz`
    console.log('Trying to download file', fileKey);
    console.log('accessKey', accesskey);
    console.log('secretKey', secretkey);

    AWS.config.update(
        {
            accessKeyId: `${accesskey}`,
            secretAccessKey: `${secretkey}`,
            region: 'ca-central-1'
        }
    );
    var options = {
        Bucket    : `${bucketName}`,
        Key    : fullFilePath,
    };

    var writableStream = fs.createWriteStream('./data/artifact.tar.gz');
    var fileStream = s3.getObject(options).createReadStream();
    fileStream.on('data', function(chunk) {
        writableStream.write(chunk);
    });
    fileStream.on('end', function() {
        res.send('Finished downloading successfully')
        writableStream.end();
        extractTar(res);

    });

})
function extractTar(res) {
    decompress('./data/artifact.tar.gz', './data/extracted/', {
        plugins: [
            decompressTargz()
        ]
    }).then(() => {
        console.log('Extract Tar file succeedd')
        moveFile(res);
        // res.send('Files decompressed');
    });
}
function moveFile(res){
    fs.rmSync('./data/build', { recursive: true, force: true });
    fse.move('./data/extracted/ui/reactive/build', process.env.DEPLOY_PATH, err => {
        if(err)  console.error(err);
        console.log('success!');
    });
}
app.listen(port, () => console.log(`Listening deployWebhook on port ${port}`))
