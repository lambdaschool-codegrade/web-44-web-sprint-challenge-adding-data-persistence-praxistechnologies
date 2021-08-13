const db = require('../../data/dbConfig')

const getTasks = async() => {
    const tasks = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')

    const tasksWithTasksBoolean = tasks.map(task => {
        if(task["task_completed"] === 0) {
            return {
                ...task,
                "task_completed": false
            }
        } else {
            return {
                ...task,
                "task_completed": true
            }
        }
    })
    const tasksWithBooleans = tasksWithTasksBoolean.map(task => {
        if(task["project_completed"] === 0) {
            return {
                ...task,
                "project_completed": false
            }
        } else {
            return {
                ...task,
                "project_completed": true
            }
        }
    })

    return tasksWithBooleans
}

const createTask = async (task) => {
    const [id] = await db('tasks').insert(task)
    const [newTask] = await db('tasks').where('task_id', id)
    if(newTask["task_completed"] === 0) {
        return {
            ...newTask,
            "task_completed": false
        }
    } else {
        return {
            ...newTask,
            "task_completed": true
        }
    }
}

module.exports = {
    getTasks,
    createTask
}