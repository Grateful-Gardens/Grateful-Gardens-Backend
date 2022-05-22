const pool = require('../db')

class Users {
    // ------------------------USERS------------------------ 
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

    // ------------------------BOOKMARKS------------------------ 
    static async getBookmarksFromDB(user_id) {
        if (!user_id) throw new Error(`USER WITH ID: ${user_id} DOES NOT EXIST`)
        const sql = `SELECT bookmarks.*, posts.*, username FROM bookmarks JOIN posts ON bookmarks.post_id = posts.post_id JOIN users ON posts.post_id = users.user_id WHERE bookmarks.user_id = ($1)`;
        const dbResult = await pool.query(sql, [user_id])
        return dbResult.rows
    }

    static async addBookmarkFromDB(post_id, user_id) {
        if (!post_id) throw new Error(`USER WITH ID: ${post_id} DOES NOT EXIST`)
        const sql = `INSERT INTO bookmarks (post_id, user_id) VALUES ($1, $2)`;
        const dbResult = await pool.query(sql, [post_id, user_id])
        return dbResult.rows
    }

    static async deleteBookmarkFromDB(user_id, post_id) {
        if (!post_id) throw new Error(`USER WITH ID: ${post_id} DOES NOT EXIST`)
        const sql = `DELETE FROM bookmarks WHERE user_id = ($1) AND post_id = ($2)`;
        const dbResult = await pool.query(sql, [user_id, post_id])
        return dbResult.rows[0]
    }

    // ------------------------FRIENDS------------------------ 
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