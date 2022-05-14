const { Pool } = require('pg')
const pool = new Pool({
    database: process.env.DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
})

module.exports = pool