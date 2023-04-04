const express = require('express')

const cors = require('cors')
const app = express();


//Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use((req, res, next) => {
    next()
})


const { Client } = require('@elastic/elasticsearch')
const client = new Client({

    node: 'https://localhost:9200',
    auth: {
        username: 'elastic',
        password: 'vGxInUDXzdqgiGzo=Wr9'
    },
})

app.get('/test',async (req,res)=>{

    const result= await client.search({
        index: 'overseas-trade',
        query: {
            match: { STATUS: 'final' }
        }
    })
    console.log(result.hits.hits)

})

module.exports = {app}
