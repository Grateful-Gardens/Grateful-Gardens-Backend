/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').primary();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.string('first_name');
        table.string('last_name');
        table.string('bio').defaultTo('Enter a short description')
        table.string('profile_pic').defaultTo("https://www.teahub.io/photos/full/321-3219401_natural-profile-picture-hd.jpg")
        table.string('cover_pic').defaultTo("https://civicwell.org/wp-content/uploads/2013/07/feature-cultivating-community-gardens.jpg");
        table.string('city').defaultTo('What city are you from')
        table.string('country').defaultTo('What country are you from')
        table.string('longer_bio').defaultTo('Tell us more about yourself!')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('users');
};