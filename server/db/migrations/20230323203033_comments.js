/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  //for adding the table for the comments
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()
    table.string('photo_date')
    table.string('user_name')
    table.string('comment')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  //for deleting the table for the comments
  return knex.schema.dropTable('comments')
}
