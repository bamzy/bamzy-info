var express = require("express");
const { exec } = require("child_process");

var app = express();
const port = 5000;
app.listen(port, () => {
    console.log("Server running on port "+port);
});
app.get("/deploy", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
app.post("/deploy", (req, res, next) => {
    exec("ls -la", (error, stdout, stderr) => {
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
});