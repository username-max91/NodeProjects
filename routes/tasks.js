const express = require('express')
const router = express.Router()
const {
    getAllTasks,
    deleteATask,
    patchATask,
    getATask,
    postAllTasks
} = require('../controllers/tasks')

router.route('/')
    .get(getAllTasks)
    .post(postAllTasks)
router.route('/:id')
    .delete(deleteATask)
    .patch(patchATask)
    .get(getATask)

module.exports = router