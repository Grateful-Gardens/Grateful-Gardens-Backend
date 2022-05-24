const pool = require("../db");

class PostsModel {
  static async getAllPostsFromDB() {
    const sql = `SELECT posts.*, users.profile_pic, users.username, COUNT(comments) AS comment_count, COUNT(likes) AS like_count FROM posts LEFT JOIN comments ON posts.post_id = comments.post_id
    LEFT JOIN likes ON posts.post_id = likes.post_id JOIN users ON posts.user_id = users.user_id
    GROUP BY posts.post_id, users.profile_pic, users.username ORDER BY posts.time_posted DESC`;
    const dbResult = await pool.query(sql);
    return dbResult.rows;
  }

  static async createPostFromDB(data) {
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

  static async deleteAPostFromDB(post_id) {
    if (!post_id) throw new Error(`POST WITH ID:${post_id} DOES NOT EXIST`);
    // Delete all comments where post is being referenced
    await pool.query(`DELETE FROM comments WHERE comments.post_id = ($1)`, [post_id]);
    // Delete actual post
    await pool.query(`DELETE FROM bookmarks WHERE bookmarks.post_id = ($1)`, [post_id])
    await pool.query(`DELETE FROM likes WHERE likes.post_id = ($1)`, [post_id]);
    await pool.query(`DELETE FROM posts WHERE post_id = ($1)`, [post_id]);
  }

  static async getAllOfAUsersPostFromDB(user_id) {
    if (!user_id) throw new Error(`POSTS WITH ID:${user_id} DO NOT EXIST`);
    const sql = `SELECT posts.*, users.profile_pic, users.username, COUNT(comments) AS comment_count, COUNT(likes) AS like_count FROM posts 
    LEFT JOIN comments ON posts.post_id = comments.post_id
    LEFT JOIN likes ON posts.post_id = likes.post_id JOIN users ON posts.user_id = users.user_id WHERE posts.user_id = ($1)
    GROUP BY posts.post_id, users.profile_pic, users.username  ORDER BY posts.time_posted DESC`;
    const dbResult = await pool.query(sql, [user_id]);
    return dbResult.rows;
  }

  static async findSpecificPostFromDB(post_id) {
    if (!post_id) throw new Error(`POST WITH ID:${post_id} DOES NOT EXIST`);
    const sql = `SELECT * FROM posts WHERE post_id = ($1)`;
    const dbResult = await pool.query(sql, [post_id]);
    return dbResult.rows[0];
  }

  static async getCommentsFromDB(post_id) {
    if (!post_id) throw new Error(`POST WITH ID:${post_id} DOES NOT EXIST`);
    const sql = `SELECT comments.*, users.username, users.profile_pic FROM comments 
    JOIN users ON comments.user_id = users.user_id
    WHERE post_id = ($1) ORDER BY time_posted ASC`;
    const dbResult = await pool.query(sql, [post_id]);
    return dbResult.rows;
  }

  static async postCommentFromDB(data) {
    const { comment_body, user_id, post_id } = data;
    const sql = `INSERT INTO comments (comment_body, user_id, post_id) VALUES ($1, $2, $3) RETURNING *`;
    const dbResult = await pool.query(sql, [comment_body, user_id, post_id]);
    return dbResult.rows;
  }

  static async deleteCommentFromDB(comment_id) {
    if (!comment_id) throw new Error(`POST WITH ID: ${comment_id} DOES NOT EXIST`);
    const sql = `DELETE FROM comments WHERE comment_id = ($1)`;
    const dbResult = await pool.query(sql, [comment_id]);
    return dbResult.rows[0];
  }

  static async addLikeFromDB(data) {
    const { post_id, user_id } = data;
    const sql = `INSERT INTO likes (post_id, user_id) VALUES ($1, $2) RETURNING *`;
    const dbResult = await pool.query(sql, [post_id, user_id]);
    return dbResult.rows;
  }

  static async deleteLikeFromDB(data) {
    const { post_id, user_id } = data
    if (!post_id) throw new Error(`POST WITH ID: ${post_id} DOES NOT EXIST`);
    const sql = `DELETE FROM likes WHERE post_id = ($1) AND user_id = ($2)`;
    const dbResult = await pool.query(sql, [post_id, user_id]);
    return dbResult.rows[0];
  }
}

module.exports = PostsModel;
