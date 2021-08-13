const db = require('../../data/dbConfig')

const getProjects = async () => {
    const projects = await db('projects')    
    const projectsWithBoolean = projects.map(project => {
        if(project["project_completed"] === 1) {
            return {
                    ...project,
                    "project_completed": true
            }
        } else {
            return {
                ...project,
                "project_completed": false
            }
        }
    })
    return projectsWithBoolean
}

const createProject = async (project) => {
    // if(project["project_completed"] === true) {
    //     project["project_completed"] = 1
    // } else {
    //     project["project_completed"] = 0
    // }
    const [id] = await db('projects').insert(project)
    const [newProject] = await db('projects').where('project_id', id)
    if(newProject["project_completed"] === 1) {
        return {
            ...project,
            "project_completed": true
        }   
    } else {
        return {
            ...project,
            "project_completed": false
        }
    }
}

module.exports = {
    getProjects,
    createProject
}