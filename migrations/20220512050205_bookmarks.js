/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('bookmarks', (table) => {
        table.increments('bookmarks_id').primary();
        table.integer('post_id').notNullable().references('post_id').inTable('posts').onDelete('cascade')
        table.integer('user_id').notNullable().references('user_id').inTable('users').onDelete('cascade')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('bookmarks')
};