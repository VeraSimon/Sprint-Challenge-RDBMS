exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', (tbl) => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('description', 65535);
        tbl.boolean('is_complete').defaultTo('false');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
