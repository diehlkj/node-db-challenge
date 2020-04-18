
exports.seed = function(knex) {
  return knex('tasks').insert([
    { id: 1, project_id: 1, name: 'Clone db-1 github repo', notes: 'Make sure to fork it first', completed: false },
    { id: 2, project_id: 1, name: 'Check out the branch', notes: 'firstname-lastname', completed: false },
    { id: 3, project_id: 1, name: 'do the code', notes: '', completed: false },
    { id: 4, project_id: 1, name: 'commit and push to origin', notes: 'Dont forget to add new files to be tracked', completed: false },
    
    { id: 5, project_id: 2, name: 'Clone db-2 github repo', notes: 'Make sure to fork it first', completed: false },
    { id: 6, project_id: 2, name: 'Check out the branch', notes: 'firstname-lastname', completed: false },
    { id: 7, project_id: 2, name: 'do the code', notes: '', completed: false },
    { id: 8, project_id: 2, name: 'commit and push to origin', notes: 'Dont forget to add new files to be tracked', completed: false },
    
    { id: 9, project_id: 3, name: 'Clone db-3 github repo', notes: 'Make sure to fork it first', completed: false },
    { id: 10, project_id: 3, name: 'Check out the branch', notes: 'firstname-lastname', completed: false },
    { id: 11, project_id: 3, name: 'do the code', notes: '', completed: false },
    { id: 12, project_id: 3, name: 'commit and push to origin', notes: 'Dont forget to add new files to be tracked', completed: false },
    
    { id: 13, project_id: 4, name: 'Clone db-4 github repo', notes: 'Make sure to fork it first', completed: false },
    { id: 14, project_id: 4, name: 'Check out the branch', notes: 'firstname-lastname', completed: false },
    { id: 15, project_id: 4, name: 'do the code', notes: '', completed: false },
    { id: 16, project_id: 4, name: 'commit and push to origin', notes: 'Dont forget to add new files to be tracked', completed: false },
  ]);
};
