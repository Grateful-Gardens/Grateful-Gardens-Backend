const router = require("express").Router();
const {
  fetchPosts,
  createPost,
  getAllOfUsersPost,
  deleteAPost,
  updatePosts,
  getLikesForAPost,
  getComments, 
  postComment,
  deleteComment
} = require("../controller/postController");

router.get("/posts", fetchPosts);

router.get("/posts/:id", getAllOfUsersPost);

router.get("/posts/:id/comments", getComments);

router.post("/posts/:id/comments", postComment);

router.delete("/posts/:id/comments", deleteComment)

router.post("/posts", createPost);

router.patch("/posts/:id", updatePosts);

router.delete("/posts/:id", deleteAPost);

router.get("/posts/:id/likes", getLikesForAPost);


// router.post('/users/:id/bookmarks')

module.exports = router;
