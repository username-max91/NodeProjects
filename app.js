const express = require('express')
const app = express()

//routes
app.get('/hello',(req,res)=>{
    res.send('Home page')
})

//app.patch is used instead of app.put after the update

app.listen(3000, (req,res)=>{
    console.log('port listen on 3000')
})