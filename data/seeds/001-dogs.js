exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('dogs')
    .truncate()
    .then(function() {
      return knex('dogs').insert([
        { breed: 'pitbull' },
        { breed: 'rottweiler' },
        { breed: 'german shepherd' },
        { breed: 'chihuahua' },
      ]);
    });
};
