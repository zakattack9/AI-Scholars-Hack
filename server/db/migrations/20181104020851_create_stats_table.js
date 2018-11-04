exports.up = function(knex, Promise) {
  return knex.schema.createTable('stats', table => {
    table.increments();
    table.integer('break');
    table.integer('studying');
    table.integer('looked_away');
    table.integer('cycles');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stats');
};
