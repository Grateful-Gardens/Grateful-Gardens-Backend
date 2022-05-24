/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').insert([
    { username: 'jah123', password: '821', email: 'jah@gmail.com', first_name: 'Jahsanni', last_name: 'Williams', bio: 'I am a coder', profile_pic: "https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/1bbe7/Twitter-NFT-profile.jpg", cover_pic:"https://cdn.images.express.co.uk/img/dynamic/143/590x/No-Man-s-Sky-gets-alternative-covers-689362.jpg"},
    { username: 'uzi123', password: '234', email: 'uzi@gmail.com', first_name: 'Uzma', last_name: 'Khan', bio: 'I like to code', profile_pic: "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", cover_pic: "https://timelinecovers.pro/facebook-cover/download/Best-Covers-For-Facebook-Timeline-sunflower.jpg"},
    { username: 'jamorey900', password: '321', email: 'jamorey@gmail.com', first_name: 'Jamorey', last_name: 'Morant', bio: 'I love gardening!', profile_pic: "https://images.statusfacebook.com/profile_pictures/nature/nature_profile_pictures_03.jpg", cover_pic: "https://images.template.net/wp-content/uploads/2014/11/Natural-Facebook-Cover-Photo.jpg"},
    { username: 'alex695', password: '123', email: 'alex@gmail.com', first_name: 'Alex', last_name: 'Lucas', bio: 'I am a writer/gardener', profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzXS2sR3PFJmJJB4p6-OpR_FG5pHFbzfiYQ&usqp=CAU", cover_pic: "https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png"},
  ]);
};
