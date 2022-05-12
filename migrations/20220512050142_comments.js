/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments('comment_id').notNullable();
        table.integer('user_id').notNullable()
        table.foreign('user_id').references('user_id').inTable('users')
        table.integer('post_id').notNullable()
        table.foreign('post_id').references('post_id').inTable('posts')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('comments')
};