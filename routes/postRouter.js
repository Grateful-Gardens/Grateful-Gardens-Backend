const router = require('express').Router();;
const { fetchPosts, createPost, getAllOfUsersPost, hashTagPost, deleteAPost, updatePosts, getLikesForAPost} = require('../controller/postController')

router.get('/posts', fetchPosts);

router.get('/posts/:id', getAllOfUsersPost);

router.get('/posts/:id', hashTagPost);

router.post('/posts', createPost);

router.patch('/posts/:id', updatePosts);

router.delete('/posts/:id', deleteAPost);

router.get('/likes/:id', getLikesForAPost)




module.exports = router