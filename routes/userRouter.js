const router = require('express').Router();;
const { getUsers, createUser, deleteUser, getUser, updateDescription, getBookmarks } = require('../controller/userController')

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.post('/users', createUser);

router.delete('/users/:id', deleteUser)

router.put('/profile/:id', updateDescription)

router.get('/users/:id/bookmarks', getBookmarks)



module.exports = router;