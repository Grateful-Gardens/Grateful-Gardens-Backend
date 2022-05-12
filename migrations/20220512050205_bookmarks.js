/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('bookmarks', (table) => {
        table.increments('id').notNullable();
        table.integer('post_id').notNullable()
        table.foreign('post_id').references('post_id').inTable('posts')
        table.integer('user_id').notNullable()
        table.foreign('user_id').references('user_id').inTable('users')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('bookmarks')
};