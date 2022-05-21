/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').insert([
    { username: 'jah123', password: 821, email: 'jah@gmail.com', first_name: 'Jahsanni', last_name: 'Williams', bio: 'I am a coder'},
    { username: 'uzi123', password: 234, email: 'uzi@gmail.com', first_name: 'Uzma', last_name: 'Khan', bio: 'I like to code'},
    { username: 'jamorey900', password: 321, email: 'jamorey@gmail.com', first_name: 'Jamorey', last_name: 'Morant', bio: 'I love gardening!'},
    { username: 'alex695', password: 123, email: 'alex@gmail.com', first_name: 'Alex', last_name: 'Lucas', bio: 'I am a writer/gardener'},
  ]);
};
