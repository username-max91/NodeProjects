const Task = require('../models/task')
const asyncWrapper = require('../mw/async')
const {createCustomError} = require('../errors/custom-error')

/* GET controller before the introduction of async.js wrapper,
try and catch blocks were previously used for every controller

const getAllTasks = async (req,res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks, amountTasks: tasks.length})
        //res.status(200).json({ status: "success", data:{tasks, numberHits: tasks.length} })
        //an example of a different server response
    } catch (error) {
        res.status(500).json({msg: error}) 
    }
}
*/
//new controller with async wrapper
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

const postAllTasks = asyncWrapper( async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
})

const getATask = asyncWrapper( async (req,res, next) => {
    const {id: taskID} = req.params
    const task = await Task.findOne({_id: taskID})
    if(!task){
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }
    res.status(200).json({task})
})

const patchATask = asyncWrapper( async (req,res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {new: true, runValidators: true})
    if(!task){
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }
    res.status(200).json({task})
})

const deleteATask = asyncWrapper( async (req,res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID})
    if(!task){
        return next(createCustomError(`No task with id: ${taskID}`, 404))
    }
    res.status(200).json({msg: `deleted task with id ${taskID}`})
})

module.exports = {
    getAllTasks,
    deleteATask,
    patchATask,
    getATask,
    postAllTasks
}