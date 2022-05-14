/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('friendships').insert([
    {friends_id: 1, user_id: 2}
  ]);
};
