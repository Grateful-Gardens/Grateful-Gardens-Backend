/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments('post_id').primary()
        table.string('hashtag')
        table.string('image')
        table.string('description')
        table.timestamp('time_posted').defaultTo(knex.fn.now())
        table.integer('user_id').notNullable().references('user_id').inTable('users').onDelete('cascade')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('posts')
};