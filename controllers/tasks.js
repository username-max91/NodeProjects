const getAllTasks = (req,res) => {
    res.send('all items from the file')
}

const postAllTasks = (req,res) => {
    res.json(req.body)
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