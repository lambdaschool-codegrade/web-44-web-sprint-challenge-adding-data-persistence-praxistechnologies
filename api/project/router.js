const express = require('express')
const router = express.Router()
const Projects = require('./model')

router.get('/', async (req, res, next) => {
    try{
        const projects = await Projects.getProjects()
        res.status(200).json(projects)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const project = req.body
        const projects = await Projects.createProject(project)
        res.status(201).json(projects)
    } catch(err) {
        next(err)
    }
})

module.exports = router