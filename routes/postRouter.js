const router = require("express").Router();
const {
  fetchPosts,
  createPost,
  getAllOfUsersPost,
  deleteAPost,
  getComments, 
  postComment,
  deleteComment
} = require("../controller/postController");

router.get("/posts", fetchPosts);

router.get("/posts/:id", getAllOfUsersPost);

router.get("/posts/:id/comments", getComments);

router.post("/posts/:id/comments", postComment);

router.delete("/comments/:id", deleteComment)

router.post("/posts", createPost);

router.delete("/posts/:id", deleteAPost);

module.exports = router;
