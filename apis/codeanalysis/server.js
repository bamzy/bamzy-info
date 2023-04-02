const {app} = require('./codeAnalysis')
require('dotenv').config();
let port = process.env.PORT;
app.listen(port, () => console.log(`Listening CodeAnalyzer on port ${port}`))

