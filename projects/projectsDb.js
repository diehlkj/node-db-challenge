const db = require('../data/dbConfig.js');

module.exports = {
    findProjects,
    findProjectsById,
    findTasks,
    insertTasks,
    findResources,
    insertResources
}
// /api/projects
    // get
    // post
// /api/projects/:id
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