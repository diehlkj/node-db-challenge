const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    insert
}
// /api/resources
    // get
    // post
// /api/resources/:id
    // put      -- optional
    // delete   -- optional

function find() {
    return db('resources')
}
function findById(id) {
    return db('resources')
        .where({ id })
}
function insert(resourceData) {
    return db('resources')
        .insert([{ name: resourceData.name, description: resourceData.description }])
}