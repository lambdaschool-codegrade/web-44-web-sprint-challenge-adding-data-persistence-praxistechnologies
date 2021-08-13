const express = require('express')
const server = express()
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')

server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    const status = err.status || 500
    res.status(status).json({
        message: err.message
    })
})

module.exports = server