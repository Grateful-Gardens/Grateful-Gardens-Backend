/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('likes', (table) => {
        table.integer('post_id')
        table.foreign('post_id').references('post_id').inTable('posts')

        table.integer('user_id')

        table.foreign('user_id').references('user_id').inTable('users')
        table.increments('like_count')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('likes')
};
