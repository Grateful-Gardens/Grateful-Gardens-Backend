/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('friendships', (table) => {
        table.increments('friendship_id').primary();
        table.integer('friend_one').notNullable().references('user_id').inTable('users')
        table.integer('friend_two').notNullable().references('user_id').inTable('users')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('friendships')
};