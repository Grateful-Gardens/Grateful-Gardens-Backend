/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').insert([
    { username: 'jah123', password: '821', email: 'jah@gmail.com', first_name: 'Jahsanni', last_name: 'Williams', bio: 'Gardens are dope', profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHd0asGDPWl3zSpRYDbGSTG2i-hEGkBD4kg&usqp=CAU", cover_pic:"https://cdn.images.express.co.uk/img/dynamic/143/590x/No-Man-s-Sky-gets-alternative-covers-689362.jpg"},
    { username: 'uzi123', password: '234', email: 'uzi@gmail.com', first_name: 'Uzma', last_name: 'Khan', bio: 'Hello friends', profile_pic: "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", cover_pic: "https://timelinecovers.pro/facebook-cover/download/Best-Covers-For-Facebook-Timeline-sunflower.jpg"},
    { username: 'jamorey900', password: '321', email: 'jamorey@gmail.com', first_name: 'Jamorey', last_name: 'Morant', bio: 'Green has to be my favorite color', profile_pic: "https://images.statusfacebook.com/profile_pictures/nature/nature_profile_pictures_03.jpg", cover_pic: "https://images.template.net/wp-content/uploads/2014/11/Natural-Facebook-Cover-Photo.jpg"},
    { username: 'alex695', password: '123', email: 'alex@gmail.com', first_name: 'Alex', last_name: 'Lucas', bio: 'I am a writer/gardener', profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzXS2sR3PFJmJJB4p6-OpR_FG5pHFbzfiYQ&usqp=CAU", cover_pic: "https://media.sproutsocial.com/uploads/2018/04/Facebook-Cover-Photo-Size.png"},
    { username: 'gardenLover', password: 'fsdf', email: 'garden@gmail.com', bio: 'My favorite garden is my backyard!', profile_pic: 'https://www.homeadvisor.com/r/wp-content/uploads/2016/01/smiling-newly-hired-gardener.jpeg', cover_pic: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover.jpg'},
    { username: 'sally234', password: 'gfds', email: 'sally@gmail.com', bio: 'I love checking out new gardens', profile_pic: 'https://static01.nyt.com/images/2021/10/22/fashion/22black-gardeners10/22black-gardeners10-mediumSquareAt3X.jpg', cover_pic: 'https://i.pinimg.com/originals/0c/f6/c3/0cf6c362a7cf6bc8e4e404811176f5c1.png'},
    { username: 'roman087', password: 'wer', email: 'Roman@gmail.com', bio: 'New to gardening :D', profile_pic: 'https://d38we5ntdyxyje.cloudfront.net/858987/profile/GJQSELLC_avatar_medium_square.jpg', cover_pic: 'https://i.pinimg.com/originals/2d/c7/d4/2dc7d4a3d546e237f32abaafe4f186b2.png'},
    { username: 'bethany02', password: 'werg', email: 'beth@gmail.com', bio: 'Who doesn"t love flowers?!', profile_pic: 'https://web.uri.edu/mastergardener/files/Food-Supply-Vanessa-Venturini-v06_1-911x1024-300x300.jpg', cover_pic: 'https://i.pinimg.com/originals/f6/41/fc/f641fc27cf96d2114ecfc82590cdfb3d.jpg'},
    { username: 'animal_lover', password: 'gag', email: 'an@gmail.com', bio: 'busy caring for the world', profile_pic: 'https://modernfarmer.com/wp-content/uploads/2020/05/unnamed-4-scaled-e1590173979472-1191x1024.jpg', cover_pic: 'https://9cover.com/images/ccovers/1465154898raining-numbers-simple.jpg'}
  ]);
};
