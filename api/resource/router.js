const express = require('express')
const router = express.Router()
const Resources = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getResources()
        res.status(200).json(resources)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const resource = req.body
        const newResource = await Resources.createResource(resource)
        res.status(201).json(newResource)
    } catch(err) {
        next(err)
    }
})

module.exports = router