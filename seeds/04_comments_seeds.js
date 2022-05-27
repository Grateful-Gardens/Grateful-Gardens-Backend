/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').insert([
    {comment_body: 'They are my favorite thing to visit whenever I"m back home', user_id: 1, post_id: 1},
    {comment_body: 'Isn"t there a farmer"s market near by too?', user_id: 2, post_id: 1},
    {comment_body: 'YES, they have the freshest vegetables you can find!', user_id: 1, post_id: 1},
    {comment_body: 'Looking forward to going there soon', user_id: 2, post_id: 1},
    {comment_body: 'What"s the address again?', user_id: 3, post_id: 1},

    {comment_body: 'Where is this?', user_id: 1, post_id: 2},
    {comment_body: 'Its a small spot near my house on off 45th street', user_id: 2, post_id: 2},
    {comment_body: 'cool, I"m def gonna check that out', user_id: 1, post_id: 2},

    {comment_body: 'Yes we do!', user_id: 2, post_id: 3},

    {comment_body: 'Through their stewardship, garden members become invested community stakeholders, giving back to the community by providing educational gardening events and activities, as well as helping, sharing and collaborating with other community groups in Malden. ', user_id: 4, post_id: 4},
    {comment_body: 'This is a community garden!!!', user_id: 2, post_id: 4},
    {comment_body: 'I"ve been there a few times, its an amazing place to learn more about the community - highly recommend checking it out', user_id: 7, post_id: 4},

    {comment_body: 'Where"s this garden located?', user_id: 6, post_id: 5},
    {comment_body: 'Off 23th and vermont street', user_id: 5, post_id: 5},
    {comment_body: 'Got it, thank you!', user_id: 6, post_id: 5},

    {comment_body: 'They also have some really cool looking flowers :D', user_id: 5, post_id: 6},

    {comment_body: 'Wow this place is growing so fast!!', user_id: 9, post_id: 7},
    {comment_body: 'I remember when it was just starting, this is amazing!', user_id: 8, post_id: 7},

    {comment_body: 'Have you checked out this garden on Nostrand st and 22nd? I heard they have some pretty uncommon vegetables', user_id: 1, post_id: 8},
    {comment_body: 'Thats nice! Ill def give them a stop when I"m around the area. Thank you!', user_id: 8, post_id: 8},

    {comment_body: 'We should do more to show kids the beauty of nature', user_id: 4, post_id: 9},
    {comment_body: 'That looks like an amazing time', user_id: 8, post_id: 9}


  ]);
};