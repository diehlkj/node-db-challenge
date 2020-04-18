// CREATE TABLE project_resources (
// 	id integer PRIMARY KEY AUTOINCREMENT,
// 	project_id integer,
// 	resource_id integer
// );

// CREATE TABLE tasks (
// 	id integer PRIMARY KEY AUTOINCREMENT,
// 	project_id integer,
// 	name string,
// 	notes text,
// 	completed boolean
// );

// CREATE TABLE resources (
// 	id integer PRIMARY KEY AUTOINCREMENT,
// 	name string,
// 	description string
// );

// CREATE TABLE projects (
// 	id integer PRIMARY KEY AUTOINCREMENT,
// 	name string,
// 	description string,
// 	completed binary
// );

exports.up = function(knex) {
  return (
    knex.schema
        .createTable('projects', tbl => {
            tbl.increments('id');               // id
            tbl.string('name', 100)             // name
                .notNullable();
            tbl.text('description', 1000);      // description
            tbl.boolean('completed')            // completed
                .notNullable()
                .defaultTo(false);
        })
        .createTable('resources', tbl => {
            tbl.increments('id');               // id
            tbl.string('name', 100)             // name
                .notNullable();
            tbl.text('description', 1000);      // description
        })
        .createTable('tasks', tbl => {
            tbl.increments('id');               // id
            tbl.integer('project_id')           // project_id
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.string('name', 100)             // name
                .notNullable();
            tbl.text('notes', 1000)             // notes
            tbl.boolean('completed')            // completed
                .notNullable()
                .defaultTo(false);
        })
        .createTable('project_resources', tbl => {
            tbl.increments('id');               // id
            tbl.integer('project_id')           // project_id
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('resource_id')           // resource_id
                .unsigned()
                .notNullable()
                .references('resources.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
  );
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('projects')
  );
};
