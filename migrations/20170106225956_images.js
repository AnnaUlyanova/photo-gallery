
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', function (table) {
    table.increments('id').primary
    table.string('url')
    table.string('alt')
    table.string('type')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images')
};
