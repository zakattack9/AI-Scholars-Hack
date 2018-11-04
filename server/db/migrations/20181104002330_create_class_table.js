exports.up = function(knex, Promise) {
  return knex.schema.createTable('class', table => {
    table.increments();
    table.string('class').notNullable();
    table.string('grade').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('class');
};
