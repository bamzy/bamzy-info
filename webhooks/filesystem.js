const fse = require("fs-extra");
const fs = require('fs');
const decompress = require('decompress');
const decompressTargz = require('decompress-targz');

function moveFolder(src,dest){

    // fs.rmSync('./data/build', { recursive: true, force: true });
    // fs.mkdir('./data/build', { recursive: true }, (err) => {
    //     if (err) throw err;
    // });
    console.log(process.env.DEPLOY_PATH);
    // fse.move('./data/extracted/ui/reactive/build', process.env.DEPLOY_PATH, err => {
    //     if(err)  throw err;
    //     res.send('done');
    // });
    fse.move(src, dest, { overwrite: true })
        .then(() => {
            console.log("File moved to the destination");

        }).catch((e) => {
        throw e;
    });


}

function extractTarFile(src,dest) {
    decompress(src, dest, {
        plugins: [
            decompressTargz()
        ]
    }).then(() => {
        console.log('Extract Tar file succeeded')
        moveFolder(src,dest);
        // res.send('Files decompressed');
    });
}


module.exports = {moveFolder,extractTarFile}