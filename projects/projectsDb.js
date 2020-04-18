const db = require('../data/dbConfig.js');

module.exports = {
    findProjects,
    findProjectsById,
    insertProjects,
    findTasks,
    insertTasks,
    findResources,
    insertResources
}
// /api/projects
    // get
    // post
// /api/projects/:id
    // get
    // put      -- optional
    // delete   -- optional
// /api/projects/:id/tasks
    // get
    // post
    // put      -- optional
    // delete   -- optional
// /api/projects/:id/resources
    // get
    // post
    // put      -- optional
    // delete   -- optional

function findProjects() {
    return db('projects')
}

function findProjectsById(id) {
    return db('projects')
    .where({ id });
}

function insertProjects(projectData) {
    return db('projects')
        .insert([{ name: projectData.name, description: projectData.description, completed: projectData.completed }])
        .then(newProject => {
            return findProjectsById(newProject[0]);
        })
}

function findTasks(id) {
    return db('tasks')
        .where({ project_id: id })
}

function findTasksByTaskId(id) {
    return db('tasks')
        .where({ id })
}

function insertTasks(id, taskData) {
    return db('tasks')
        .insert([{ project_id: id, name: taskData.name, notes: taskData.notes, completed: taskData.completed }])
        .then(newTask => {
            return findTasksByTaskId(newTask[0]);
        })
}

function findResources(id) {
    return db('project_resources')
        .where({ project_id: id })
}

function findResourcesByResourceId(id) {
    return db('project_resources')
        .where({ id })
}

function insertResources(id, resourceData) {
    return db('project_resources')
        .insert([{ project_id: id, resource_id: resourceData.resource_id }])
        .then(newResource => {
            return findResourcesByResourceId(newResource[0]);
        })
}