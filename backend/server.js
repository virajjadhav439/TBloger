const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors())

app.get('/api/message',(req,res)=>{
    res.json({
        message : "Hello From Backend"
    })
})

port = 3000

app.listen(port,()=>{
    console.log(`the server is runned on ${port}`);
    
})