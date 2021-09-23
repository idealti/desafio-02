const express = require('express')()
const api = require('./data.json')
const cors = require('cors')
express.use(cors())
express.get('/api',(req,res)=>{
     res.send(api)
    })

express.listen(8081,()=>console.log('ok'))