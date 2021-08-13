const express = require('express')
const router = express.Router()
const Tasks = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks()
        res.status(200). json(tasks)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const task = req.body
        const newTask = await Tasks.createTask(task)
        res.status(201).json(newTask)
    } catch(err) {
        next(err)
    }
})

module.exports = router