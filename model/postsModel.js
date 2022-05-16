const pool = require('../db')

class PostsModel {
    static async getAllPosts() {
        const sql = `SELECT * FROM posts`
        const dbResult = await pool.query(sql);
        return dbResult.rows
    }

    static async createPost(data) {
        const { hashtag, image, description, user_id } = data
        const sql = `INSERT INTO posts (hashtag, image, description, user_id) VALUES ($1, $2, $3, $4) RETURNING *`;
        const dbResult = await pool.query(sql, [hashtag, image, description, user_id])
        return dbResult.rows
    }

    static async deleteAPost(post_id) {
        if (!post_id) throw new Error(`NO post with the id of: ${post_id}`)
        const sql = `DELETE FROM posts WHERE post_id = ($1)`;
        const dbResult = await pool.query(sql, [post_id])
        return dbResult.rows[0]
    }

    // Change to getBookmarkedPosts()
    static async getAllOfAUsersPost(post_id) {
        const sql = `SELECT * FROM posts WHERE post_id = ($1)`;
        const dbResult = await pool.query(sql, [post_id])
        return dbResult.rows[0]
    }

    static async findSpecificPost(post_id) {
        const sql = `SELECT * FROM posts WHERE post_id = ($1)`;
        const dbResult = await pool.query(sql, [post_id])
        return dbResult.rows[0]
    }
    // static async findPostByHashTag(hashtag) {
    //     const sql = `SELECT * FROM posts WHERE hashtag = ($1)`;
    //     const dbResult = await pool.query(sql, [hashtag])
    //     return dbResult.rows
    // }

    // static async updatePost(post_id, description) {
    //     const sql = `UPDATE posts SET description = ($2) WHERE post_id = ($1)`;
    //     const dbResult = await pool.query(sql, [post_id, description])
    //     return dbResult.rows
    // }




}

module.exports = PostsModel