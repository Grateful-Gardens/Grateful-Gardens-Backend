/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').primary()
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.integer('zipcode').notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('bio')
        table.string('display_name').unique();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('users')
};