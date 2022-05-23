const PostsModel = require("../model/postsModel");

async function fetchPosts(req, res) {
  try {
    const data = await PostsModel.getAllPostsFromDB();
    return res.json({
      data,
    });
  } catch (err) {
    res.statusCode = 200;
    res.json({
      message: err.message,
    });
  }
}

async function createPost(req, res) {
  const { hashtag, image, description, user_id } = req.body;
  const postData = {
    hashtag,
    image,
    description,
    user_id,
  };
  if (!postData) {
    return res.status(400).json({
      message: "NO DATA IS BEING PROVIDED",
    });
  }
  try {
    const postInfo = await PostsModel.createPostFromDB(postData);
    return res.status(201).json({
      data: postInfo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function deleteAPost(req, res) {
  const post_id = req.params.id;
  const data = await PostsModel.findSpecificPostFromDB(post_id);

  if (!data) {
    return res.status(404).json({
      message: `POST WITH ID: ${post_id} DOES NOT EXIST`,
    });
  }
  try {
    await PostsModel.deleteAPostFromDB(post_id);
    return res.send(`SUCCESSFULLY DELETED POST WITH ID: ${post_id}`).status(204);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
}

async function getAllOfUsersPost(req, res) {
  const user_id = req.params.id;

  if (!user_id) {
    return res.status(404).json({
      message: `POSTS WITH ID:${user_id} DOES NOT EXIST`,
    });
  }
  try {
    const data = await PostsModel.getAllOfAUsersPostFromDB(user_id);
    return res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
}

async function getComments(req, res) {
  const post_id = req.params.id;
  if (!post_id) {
    return res.status(404).json({
      message: `POST WITH ID:${post_id} DOES NOT EXIST`,
    });
  }
  try {
    const data = await PostsModel.getCommentsFromDB(post_id);
    return res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
}

async function postComment(req, res) {
  const { comment_body, user_id, post_id } = req.body;
  if (comment_body === '') return

  const postData = {
    comment_body,
    user_id,
    post_id,
  };
  if (!postData) {
    return res.status(400).json({
      message: "NO DATA IS BEING PROVIDED",
    });
  }
  try {
    const postInfo = await PostsModel.postCommentFromDB(postData);
    return res.status(201).json({
      data: postInfo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

async function deleteComment(req, res) {
  const comment_id = req.params.id

  if (!comment_id) {
    return res.status(404).json({
      message: `COMMENT WITH ID: ${comment_id} DOES NOT EXIST`,
    });
  }
  try {
    const deleteInfo = await PostsModel.deleteCommentFromDB(comment_id);
    return res.status(200).json({
      deleteInfo,
    })
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
}

module.exports = {
  fetchPosts,
  createPost,
  deleteAPost,
  getAllOfUsersPost,
  getComments,
  postComment,
  deleteComment
};
