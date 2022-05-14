/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').insert([
    { username: 'jah123', password: 'jah456', email: 'jah@gmail.com', zipcode: 11235, first_name: 'Jahsanni', last_name: 'Williams', bio: 'I am a coder', display_name: 'Jah821'},
    { username: 'uzi123', password: 'uzi456', email: 'uzi@gmail.com', zipcode: 11235, first_name: 'Uzma', last_name: 'Khan', bio: 'I like to code', display_name: 'uzi989'},
    { username: 'jamorey900', password: 'jamorey901', email: 'jamorey@gmail.com', zipcode: 11235, first_name: 'Jamorey', last_name: 'Morant', bio: 'I love gardening!', display_name: 'jamorey009'},
    { username: 'alex695', password: 'alex596', email: 'alex@gmail.com', zipcode: 11235, first_name: 'Alex', last_name: 'Lucas', bio: 'I am a writer/gardener', display_name: 'alexOnTop32'},
  ]);
};
