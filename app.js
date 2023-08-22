require('dotenv').config();
const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect')

//middleware

app.use(express.json())
app.use('/api/v1/tasks', tasks)

//routes


//app.patch is used instead of app.put after the update

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, (req,res)=>{console.log('port listen on 3000')})
    } catch (error) {
        console.log(error)
    }
}

start()