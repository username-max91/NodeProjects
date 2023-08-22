const Task = require('../models/task')

const getAllTasks = async (req,res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error}) 
    }
    res.send('all items from the file')
}

const postAllTasks = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error}) 
    }

}

const getATask = (req,res) => {
    res.send('show single task')
}

const patchATask = (req,res) => {
    res.send('patch/update a task')
}

const deleteATask = (req,res) => {
    taskNumber = req.params.id
    res.send(`delete a task ${taskNumber}`)
}

module.exports = {
    getAllTasks,
    deleteATask,
    patchATask,
    getATask,
    postAllTasks
}