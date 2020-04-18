const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById
}
// /api/tasks
    // get
    // post
// /api/tasks/:id
    // put      -- optional
    // delete   -- optional

function find() {
    return db('tasks')
}
function findById(id) {
    return db('tasks')
        .where({ id })
}