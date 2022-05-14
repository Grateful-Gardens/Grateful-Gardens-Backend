/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').insert([
    {hashtag: 'Hope', image: '', description: 'Spreading Hope!', user_id: 1},
    // {hashtag: 'Love', image: '', description: 'Spreading Love!'},
    // {hashtag: 'LiveGreen', image: '', description: 'Spreading Greens!'},
    // {hashtag: 'LiveHealthy', image: '', description: 'Spreading healthy habits!'}
  ]);
};
