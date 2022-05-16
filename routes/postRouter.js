const router = require('express').Router();;
const { fetchPosts, createPost, getAllOfUsersPost, hashTagPost, deleteAPost, updatePosts } = require('../controller/postController')

router.get('/posts', fetchPosts);

router.get('/posts/:id', getAllOfUsersPost);

router.get('/posts/:id', hashTagPost);

router.post('/posts', createPost);

router.patch('/posts/:id', updatePosts);

router.delete('/posts/:id', deleteAPost);




module.exports = router