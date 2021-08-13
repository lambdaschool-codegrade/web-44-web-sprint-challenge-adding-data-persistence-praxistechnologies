const db = require('../../data/dbConfig')

const getResources = async () => {
    const resources = await db('resources').select('*')
    return resources
}

const createResource = async (resource) => {    
    const [id] = await db('resource').insert(resource)
    const [newResource] = await db('resources').where('resource_id', id)
    return(newResource)
}

module.exports = {
    getResources,
    createResource
}