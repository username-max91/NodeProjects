require('dotenv').config();
const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connect')
const notFound = require('./mw/not-found.js')
const errorHandlerMw = require('./mw/error-handler.js')

//middleware

app.use(express.static('./course materials/03-task-manager/starter/public'))
app.use(express.json())


//routes
app.use('/api/v1/tasks', tasks)
//adding 404 page middleware
app.use(notFound)

//app.patch is used instead of app.put after the update

//adding a custom error handler middleware
app.use(errorHandlerMw)

const port = process.env.PORT || 3000

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, (req,res)=>{console.log(`port listen on ${port}`)})
    } catch (error) {
        console.log(error)
    }
}

start()