/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("friendships").insert([
    { friend_one: 1, friend_two: 2 },
    { friend_one: 1, friend_two: 3 },
  ]);
};
