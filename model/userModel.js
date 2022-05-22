const pool = require('../db')

class Users {
    static async getAllUsersFromDB() {
        const sql = `SELECT * FROM users`;
        const dbResult = await pool.query(sql);
        return dbResult.rows
    }

    static async getUserFromDB(user_id) {
        const sql = `SELECT * FROM users WHERE user_id = ($1)`;
        const dbResult = await pool.query(sql, [user_id])
        return dbResult.rows[0]
    }

    static async createUserFromDB(data) {
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

    static async deleteUserFromDB(user_id) {
        if (!user_id) throw new Error(`USER WITH ID: ${user_id} DOES NOT EXIST`)
        const sql = `DELETE FROM users WHERE user_id = ($1)`;
        const dbResult = await pool.query(sql, [user_id])
        return dbResult.rows[0]
    }

    static async updateDescriptionFromDB(data) {
        if (!user_id) throw new Error(`USER WITH ID: ${user_id} DOES NOT EXIST`)
        const { user_id, description } = data
        const sql = `UPDATE users SET bio = ($1) WHERE user_id = ($2) RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, description])
        return dbResult.rows
    }

    static async getBookmarksFromDB(user_id) {
        if (!user_id) throw new Error(`USER WITH ID: ${user_id} DOES NOT EXIST`)
        const sql = `SELECT * FROM bookmarks WHERE user_id = ($1)`;
        const dbResult = await pool.query(sql, [user_id])
        return dbResult.rows
    }

    // static async addBookmark(user_id) {
    //     if (!user_id) throw new Error(`USER WITH ID: ${user_id} DOES NOT EXIST`)
    //     const sql = `SELECT * FROM bookmarks WHERE user_id = ($1)`;
    //     const dbResult = await pool.query(sql, [user_id ])
    //     return dbResult.rows
    // }

    static async getAllFriendsFromDB(user_id) {
        const sql = `SELECT * FROM friendships WHERE friend_one = ($1) AND accepted = true`;
        const dbResult = await pool.query(sql, [user_id]);
        return dbResult.rows
    }

    static async unFriendFromDB(data) {
        console.log(data)
        const { user_id, friend_id } = data
        if (!friend_id) throw new Error(`FRIENDSHIP WITH ID: ${friend_id} DOES NOT EXIST`)
        const sql = `DELETE FROM friendships WHERE friend_one = ($1) AND friend_two = ($2) OR friend_two = ($1) AND friend_one = ($2) RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, friend_id])
        return dbResult.rows[0]
    }


}

module.exports = Users