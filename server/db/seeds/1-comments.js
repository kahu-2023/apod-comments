/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comments').insert([
    { id: 1, photo_date: '2023-03-24', user_name: 'Sam', comment: 'Nice' },
    {
      id: 2,
      photo_date: '2023-03-24',
      user_name: 'Estrella',
      comment: 'Lovely',
    },
    {
      id: 3,
      photo_date: '2023-03-24',
      user_name: 'Schtazi',
      comment: 'Wowwwww',
    },
  ])
}
