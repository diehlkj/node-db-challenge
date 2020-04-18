const db = require('../data/dbConfig.js');

module.exports = {
    find
    // findById
}
// /api/tasks
    // get
    // post
// /api/tasks/:id
    // put      -- optional
    // delete   -- optional

function find() {
    return db('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
        .select('projects.name as project name', 'projects.description', 'tasks.name as task', 'tasks.notes', 'tasks.completed')
}
// select [projects].name as 'project name', [projects].description, [tasks].name as 'task', [tasks].notes, [tasks].completed
// from [tasks]
// join [projects]
// on [tasks].project_id = [projects].id

// This isnt working and I dont have time to figure out why....

// function findById(id) {
//     return db('tasks')
//         .join('projects', 'projects.id', 'tasks.project_id')
//         .select('projects.name as project name', 'projects.description', 'tasks.id', 'tasks.name as task', 'tasks.notes', 'tasks.completed')
//         .where({ id })
// }