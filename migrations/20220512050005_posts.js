/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments('post_id').notNullable();
        table.string('hashtag').nullable()
        table.string('image')
        table.string('description').nullable()
        table.timestamps('time_posted')

        table.integer('user_id').notNullable()
        table.foreign('user_id').references('user_id').inTable('users')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('posts')
};