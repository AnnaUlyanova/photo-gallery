
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('images').insert({id: 1, url: 'https://goo.gl/nRVwDf', alt:'nz-landscape', type: 'Landscapes', home: 'true'}),
        knex('images').insert({id: 2, url: 'https://goo.gl/Xn8FbO', alt:'nz-landscape', type: 'Landscapes', home: 'false'}),
        knex('images').insert({id: 3, url: 'https://goo.gl/YMv9aN', alt:'nz-landscape', type: 'Landscapes', home: 'false'}),
        knex('images').insert({id: 4, url: 'https://goo.gl/C1s9XN', alt:'nz-landscape', type: 'Landscapes', home: 'false'}),
        knex('images').insert({id: 5, url: 'https://goo.gl/iXePH1', alt:'nz-cityscape', type: 'Cityscapes', home: 'true'}),
        knex('images').insert({id: 6, url: 'https://goo.gl/WWE3bK', alt:'nz-cityscape', type: 'Cityscapes', home: 'false'}),
        knex('images').insert({id: 7, url: 'https://goo.gl/Z0uYVf', alt:'nz-cityscape', type: 'Cityscapes', home: 'false'}),
        knex('images').insert({id: 8, url: 'https://goo.gl/Z0uYVf', alt:'nz-cityscape', type: 'Cityscapes', home: 'false'}),
        knex('images').insert({id: 9, url: 'https://goo.gl/ywC91H', alt:'nz-wildlife', type: 'Wildlife', home: 'true'}),
        knex('images').insert({id: 10, url: 'https://goo.gl/aaeNsw', alt:'nz-wildlife', type: 'Wildlife', home: 'false'}),
        knex('images').insert({id: 11, url: 'https://goo.gl/wthtUw', alt:'nz-wildlife', type: 'Wildlife', home: 'false'}),
        knex('images').insert({id: 12, url: 'https://goo.gl/QEkxko', alt:'nz-wildlife', type: 'Wildlife', home: 'false'}),
        knex('images').insert({id: 13, url: 'https://goo.gl/CBkS9U', alt:'nz-sunset', type: 'Sunsets and Sunrises', home: 'true'}),
        knex('images').insert({id: 14, url: 'https://goo.gl/3iusqb', alt:'nz-sunset', type: 'Sunsets and Sunrises', home: 'false'}),
        knex('images').insert({id: 15, url: 'https://goo.gl/tP2VK9', alt:'nz-sunset', type: 'Sunsets and Sunrises', home: 'false'}),
        knex('images').insert({id: 16, url: 'https://goo.gl/Z0uYVf', alt:'nz-sunset', type: 'Sunsets and Sunrises', home: 'false'}),

      ]);
    });
};
