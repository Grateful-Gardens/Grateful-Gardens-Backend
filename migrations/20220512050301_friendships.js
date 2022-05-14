/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('friendships', (table) => {
        table.increments('friendship_id');
        table.integer('friends_id').notNullable();
        table.integer('user_id').notNullable().references('user_id').inTable('users').onDelete('cascade')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('friendships')
};