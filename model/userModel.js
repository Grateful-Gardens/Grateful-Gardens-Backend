const pool = require('../db')

class Users {
    static async getAllUsers() {
        const sql = `SELECT * FROM users`;
        const dbResult = await pool.query(sql);
        return dbResult.rows
    }

    static async getUser(user_id) {
        const sql = `SELECT * FROM users WHERE user_id = ($1)`;
        const dbResult = await pool.query(sql, [user_id])
        return dbResult.rows[0]
    }

    static async createUser(data) {
        const { username, password, email, first_name, last_name, bio } = data
        const sql = `INSERT INTO users (username, password, email, first_name, last_name, bio) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const dbResult = await pool.query(sql, [
            username,
            password,
            email,
            first_name,
            last_name,
            bio
        ])
        return dbResult.rows
    }

    static async deleteUser(user_id) {
        if (!user_id) throw new Error(`USER WITH ID: ${user_id} DOES NOT EXIST`)
        const sql = `DELETE FROM users WHERE user_id = ($1)`;
        const dbResult = await pool.query(sql, [user_id])
        return dbResult.rows[0]
    }

    static async updateDescription(data) {
        if (!user_id) throw new Error(`USER WITH ID: ${user_id} DOES NOT EXIST`)
        const { user_id, description } = data
        const sql = `UPDATE users SET bio = ($1) WHERE user_id = ($2) RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, description])
        return dbResult.rows
    }

    static async getBookmarks(user_id) {
        if (!user_id) throw new Error(`USER WITH ID: ${user_id} DOES NOT EXIST`)
        const sql = `SELECT * FROM bookmarks WHERE user_id = ($1)`;
        const dbResult = await pool.query(sql, [user_id ])
        return dbResult.rows
    }

    // static async addBookmark(user_id) {
    //     if (!user_id) throw new Error(`USER WITH ID: ${user_id} DOES NOT EXIST`)
    //     const sql = `SELECT * FROM bookmarks WHERE user_id = ($1)`;
    //     const dbResult = await pool.query(sql, [user_id ])
    //     return dbResult.rows
    // }
}

module.exports = Users