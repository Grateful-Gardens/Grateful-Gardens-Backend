// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'hackathon_db',
      user:     'postgres',
      password: '1'
    }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'hackathon_db',
  //     user:     'jah',
  //     password: 'nohacking'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'postgresql',
    connection: {
      database: 'hackathon_db',
      user:     'jah',
      password: 'nohacking'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
