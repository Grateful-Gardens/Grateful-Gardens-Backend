const router = require("express").Router();
const {
  getAllPosts,
  createPost,
  getAllOfUsersPost,
  deleteAPost,
  getComments, 
  postComment,
  deleteComment,
  addLike,
  deleteLike
} = require("../controller/postController");

router.get("/posts", getAllPosts);

router.get("/posts/:id", getAllOfUsersPost);

router.get("/posts/:id/comments", getComments);

router.post("/posts/:id/comments", postComment);

router.delete("/comments/:id", deleteComment)

router.post("/posts", createPost);

router.delete("/posts/:id", deleteAPost);

router.post("/posts/:id/likes", addLike)

router.delete("/posts/:id/likes", deleteLike)

module.exports = router;
