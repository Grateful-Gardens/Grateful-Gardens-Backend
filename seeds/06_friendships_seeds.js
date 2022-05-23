/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('friendships').insert([
    { friend_one: 1, friend_two: 2, accepted: true },
    { friend_one: 1, friend_two: 3, accepted: true },
    { friend_one: 1, friend_two: 4, accepted: true },
    { friend_one: 2, friend_two: 4, accepted: false },
    { friend_one: 3, friend_two: 2, accepted: false },
  ]);
};
