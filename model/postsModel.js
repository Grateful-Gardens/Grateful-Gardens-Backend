const pool = require("../db");

class PostsModel {
  static async getAllPosts() {
    const sql = `SELECT post_id, hashtag,image, description, time_posted, users.user_id, username FROM posts 
        JOIN users ON posts.user_id = users.user_id order by time_posted desc`;
    // SELECT posts.post_id, hashtag,image, description, time_posted, users.user_id, username, my_like_count
    // FROM posts
    // JOIN users
    // ON posts.user_id = users.user_id
    // JOIN (SELECT post_id, COUNT(post_id) AS my_like_count FROM likes GROUP BY post_id)
    // AS like_counter
    // ON posts.post_id = like_counter.post_id
    const dbResult = await pool.query(sql);
    return dbResult.rows;
  }

  static async createPost(data) {
    const { hashtag, image, description, user_id } = data;
    const sql = `INSERT INTO posts (hashtag, image, description, user_id) VALUES ($1, $2, $3, $4) RETURNING *`;
    const dbResult = await pool.query(sql, [
      hashtag,
      image,
      description,
      user_id,
    ]);
    return dbResult.rows;
  }

  static async deleteAPost(post_id) {
    if (!post_id) throw new Error(`POST WITH ID:${post_id} DOES NOT EXIST`);
    const sql = `DELETE FROM posts WHERE post_id = ($1)`;
    const dbResult = await pool.query(sql, [post_id]);
    return dbResult.rows[0];
  }

  static async getAllOfAUsersPost(post_id) {
    if (!post_id) throw new Error(`POSTS WITH ID:${post_id} DO NOT EXIST`);
    const sql = `SELECT * FROM posts WHERE post_id = ($1)`;
    const dbResult = await pool.query(sql, [post_id]);
    return dbResult.rows[0];
  }

  static async findSpecificPost(post_id) {
    if (!post_id) throw new Error(`POST WITH ID:${post_id} DOES NOT EXIST`);
    const sql = `SELECT * FROM posts WHERE post_id = ($1)`;
    const dbResult = await pool.query(sql, [post_id]);
    return dbResult.rows[0];
  }

  static async getLikes(post_id) {
    if (!post_id) throw new Error(`POST WITH ID:${post_id} DOES NOT EXIST`);
    const sql = `SELECT COUNT($1) from likes`;
    const dbResult = await pool.query(sql, [post_id]);
    return dbResult.rows[0];
  }

  static async getComments(post_id) {
    if (!post_id) throw new Error(`POST WITH ID:${post_id} DOES NOT EXIST`);
    const sql = `SELECT comments.*, users.username FROM comments 
        JOIN users ON comments.user_id = users.user_id
        WHERE post_id = $1`;
    const dbResult = await pool.query(sql, [post_id]);
    return dbResult.rows;
  }

  static async postComment(data) {
    const { comment_body, user_id, post_id } = data;
    const sql = `INSERT INTO comments (comment_body, user_id, post_id) VALUES ($1, $2, $3) RETURNING *`;
    const dbResult = await pool.query(sql, [comment_body, user_id, post_id]);
    return dbResult.rows;
  }
}

module.exports = PostsModel;
