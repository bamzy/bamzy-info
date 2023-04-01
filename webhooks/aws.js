
const AWS = require("aws-sdk");
const fs = require("fs");
var s3 = new AWS.S3();

const bucketName = process.env.BUCKET_NAME;
const accesskey = process.env.AWS_ACCESS_KEY_ID;
const secretkey = process.env.AWS_SECRET_ACCESS_KEY;
require('dotenv').config();

const {extractTarFile} = require('./filesystem')

const downloadS3Artifact = (buildNumber,downloadPath,extractPath) => {
    var fullFilePath = `react-ui/${buildNumber,downloadPath}/react-ui-artifact-${buildNumber,downloadPath}.tar.gz`
    downloadS3File(fullFilePath,downloadPath,extractPath)
}
const downloadS3File = (fullFilePath,downloadPath,extractPath)=>{
    // download the file via aws s3 here
    console.log('Going to download file:', fullFilePath);


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

    try {
        var writableStream = fs.createWriteStream(downloadPath);
        var fileStream = s3.getObject(options).createReadStream();
        fileStream.on('data', function(chunk) {
            writableStream.write(chunk);
        });
        fileStream.on('error', function(err) {
            let msg = "Error happened when downloading from S3: " + err.message;
            console.log(msg)

        });
        fileStream.on('end', function() {
            console.log('Finished downloading successfully')
            writableStream.end();
            extractTarFile(downloadPath, extractPath);

        });

    } catch (err){
        throw  err
    }

}
module.exports = {downloadS3Artifact,downloadS3File}