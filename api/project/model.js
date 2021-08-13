const db = require('../../data/dbConfig')

const getProjects = async () => {
    const projects = await db('projects')
    const projectsWithBoolean = projects.map(project => {
        if(project["project_completed"] === 0) {
            return {
                    ...project,
                    "project_completed": false
            }
        } else {
            return {
                ...project,
                "project_completed": true
            }
        }
    })
    return projectsWithBoolean
}

const createProject = async (project) => {
    const [id] = await db('projects').insert(project)
    const [newProject] = await db('projects').where('project_id', id)
    if(newProject["project_completed"] === 0) {
        return {
            ...project,
            "project_completed": false
        }   
    } else {
        return {
            ...project,
            "project_completed": true
        }
    }
}

module.exports = {
    getProjects,
    createProject
}