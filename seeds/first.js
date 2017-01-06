
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('images').insert({id: 1, url: 'https://goo.gl/nRVwDf', alt:'nz', type: 'landscapes'}),
        knex('images').insert({id: 2, url: 'https://goo.gl/5hY4ns', alt:'nz', type: 'landscapes'}),
        knex('images').insert({id: 3, url: 'https://goo.gl/WFNS6X', alt:'nz', type: 'landscapes'}),
        knex('images').insert({id: 4, url: 'https://goo.gl/C1s9XN', alt:'nz', type: 'landscapes'}),
        knex('images').insert({id: 5, url: 'https://goo.gl/iXePH1', alt:'nz', type: 'cityscapes'})
      ]);
    });
};
