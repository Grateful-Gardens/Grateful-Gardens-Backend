/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('bookmarks').insert([
    {user_id: 1, post_id: 1},
    {user_id: 1, post_id: 2},
    {user_id: 1, post_id: 3},
    {user_id: 1, post_id: 4},
  ]);
};
