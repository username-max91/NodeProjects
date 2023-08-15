const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://test:<password>@nodeexpressprojects.5d5zl4w.mongodb.net/StoreTest/?retryWrites=true&w=majority'

mongoose.connect(connectionString)