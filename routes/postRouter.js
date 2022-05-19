const router = require("express").Router();
const {
  fetchPosts,
  createPost,
  getAllOfUsersPost,
  hashTagPost,
  deleteAPost,
  updatePosts,
  getLikesForAPost,
  getComments, 
  postComment
} = require("../controller/postController");

router.get("/posts", fetchPosts);

router.get("/posts/:id", getAllOfUsersPost);

router.get("/posts/:id", hashTagPost);

router.get("/posts/:id/comments", getComments);

router.post("/posts/:id/comments", postComment);

router.post("/posts", createPost);

router.patch("/posts/:id", updatePosts);

router.delete("/posts/:id", deleteAPost);

router.get("/posts/:id/likes", getLikesForAPost);

module.exports = router;
