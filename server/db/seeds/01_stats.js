exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stats')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('stats').insert([
        { id: 1, break: 0, studying: 0, cycles: 0, looked_away: 0 }
      ]);
    });
};
