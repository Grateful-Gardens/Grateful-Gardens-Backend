/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').insert([
    {hashtag: 'Hope', image: 'https://www.unidosus.org/wp-content/uploads/2015/06/CommunityGarden_384.png', description: 'I love teaching my son at these local gardens', user_id: 1},
    {hashtag: 'Love', image: 'https://i.guim.co.uk/img/media/57d54f2801b6dbbda1e9a3ebbdb61b4863a0451d/0_161_4928_2957/master/4928.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=bfb9446f2a66fc910a414c44b74ec72d', description: 'Feels like home', user_id: 2},
    {hashtag: 'LiveGreen', image: 'https://www.signupgenius.com/cms/images/nonprofit/community-service-ideas.jpg', description: 'Enjoying life', user_id: 3},
    {hashtag: 'LiveHealthy', image: 'https://www.cityofmalden.org/ImageRepository/Document?documentID=3469', description: 'We love coming to this garden', user_id: 4}
  ]);
};
