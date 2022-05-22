const router = require('express').Router();;
const { getUsers, createUser, deleteUser, getUser, updateDescription, getBookmarks, getAllFriends, unFriend } = require('../controller/userController')

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.post('/users', createUser);

router.delete('/users/:id', deleteUser)

router.put('/profile/:id', updateDescription)

router.get('/users/:id/bookmarks', getBookmarks)

router.get('/users/:id/friends', getAllFriends)

router.delete('users/:id/friends', unFriend)



module.exports = router;