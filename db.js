const { Pool } = require('pg')
const pool = new Pool({
    database: 'hackathon_db',
    user: 'jah',
    password: '123'
})

module.exports = pool