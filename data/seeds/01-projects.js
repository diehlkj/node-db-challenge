exports.seed = function(knex) {
  return knex('projects').insert([
    { id: 1, name: 'Node db1', description: 'First db project in node', completed: false },
    { id: 2, name: 'Node db2', description: 'Second db project in node', completed: false },
    { id: 3, name: 'Node db3', description: 'Third db project in node', completed: false },
    { id: 4, name: 'Node db4', description: 'Fourth db project in node', completed: false },
  ])
};
