const db = require('../../data/dbConfig')

const getResources = async () => {
    const resources = await db('resources')
    return resources
}

const createResource = async (resource) => {
    const [id] = await db('resources').insert(resource)
    const [newResource] = await db('resources').where('resource_id', id)
    return(newResource)
}

module.exports = {
    getResources,
    createResource
}