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
        const { username, password, email, first_name, last_name } = data
        const sql = `INSERT INTO users (username, password, email, first_name, last_name) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const dbResult = await pool.query(sql, [
            username,
            password,
            email,
            first_name,
            last_name,
        ])
        return dbResult.rows
    }

    static async deleteUserFromDB(user_id) {
        if (!user_id) throw new Error(`USER WITH ID: ${user_id} DOES NOT EXIST`)
        const sql = `DELETE FROM users WHERE user_id = ($1)`;
        const dbResult = await pool.query(sql, [user_id])
        return dbResult.rows[0]
    }

    static async updateUserInfoFromDB(data) {
        const { user_id, bio, city, country, longer_bio } = data
        if (!user_id) throw new Error(`USER WITH ID: ${user_id} DOES NOT EXIST`)
        const sql = `UPDATE users SET bio = ($2), city = ($3), country = ($4), longer_bio = ($5) WHERE user_id = ($1) RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, bio, city, country, longer_bio])
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
        const sql = `SELECT users.*, accepted, friend_two FROM friendships JOIN users ON friendships.friend_two = users.user_id WHERE friend_one = ($1)`;
        const dbResult = await pool.query(sql, [user_id]);
        return dbResult.rows
    }

    static async getAllFriendsFromDBTwo(user_id) {
        const sql = `SELECT users.*, accepted, friend_two FROM friendships JOIN users ON friendships.friend_one = users.user_id WHERE friend_two = ($1)`;
        const dbResult = await pool.query(sql, [user_id]);
        return dbResult.rows
    }

    static async unFriendFromDB(data) {
        const { user_id, friend_two } = data
        if (!friend_two) throw new Error(`FRIENDSHIP WITH ID: ${friend_two} DOES NOT EXIST`)
        const sql = `DELETE FROM friendships WHERE friend_one = ($1) AND friend_two = ($2) OR friend_two = ($1) AND friend_one = ($2) RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, friend_two])
        return dbResult.rows[0]
    }

    static async sendFriendRequestFromDB(data) {
        const { user_id, friend_two } = data
        const sql = `INSERT INTO friendships (friend_one, friend_two) VALUES ($1, $2) RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, friend_two])
        return dbResult.rows
    }

    static async acceptFriendRequestFromDB(data) {
        const { user_id, friend_two } = data
        const sql = `UPDATE friendships SET accepted = true WHERE friend_one = ($1) AND friend_two = ($2) OR friend_one = ($2) AND friend_two = ($1) RETURNING *`;
        const dbResult = await pool.query(sql, [user_id, friend_two])
        return dbResult.rows
    }
}

module.exports = Users