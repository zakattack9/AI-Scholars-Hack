exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('class').del()
    .then(function () {
      // Inserts seed entries
      return knex('class').insert([
        {class: 'English', grade: 'A'},
        {class: 'Physics', grade: 'C'},
      ]);
    });
};
