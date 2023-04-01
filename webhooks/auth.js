const crypto = require("crypto");
require('dotenv').config();
const sigHeaderName = 'X-Hub-Signature-256';
const sigHashAlg = 'sha256';
const secret = process.env.DEPLOY_SECRET;
function verifyGithubWebhookPostData(req, res, next) {
    if (!req.rawBody) {
        return next('Request body empty')
    }
    const sig = Buffer.from(req.get(sigHeaderName) || '', 'utf8')
    const hmac = crypto.createHmac(sigHashAlg, secret)
    // console.log(req.rawBody);
    const digest = Buffer.from(sigHashAlg + '=' + hmac.update(req.rawBody).digest('hex'), 'utf8')
    console.log(secret + " | sig: " + req.get(sigHeaderName));
    if (sig.length !== digest.length || !crypto.timingSafeEqual(digest, sig)) {
        return next(`Request body digest (${digest}) did not match ${sigHeaderName} (${sig})`)
    }

    return next()
}
module.exports = {verifyGithubWebhookPostData}