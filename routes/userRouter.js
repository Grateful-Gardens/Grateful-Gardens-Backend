const router = require('express').Router();;
const { getUsers, createUser, deleteUser, getUser, updateDescription, getBookmarks, getAllFriends, unFriend, addBookmark, deleteBookmark } = require('../controller/userController')

// ------------------------USERS------------------------ 
router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.post('/users', createUser);

router.delete('/users/:id', deleteUser)

router.put('/profile/:id', updateDescription)

// ------------------------BOOKMARKS------------------------ 
router.get('/users/:id/bookmarks', getBookmarks)

router.post('/users/:id/bookmarks', addBookmark)

router.delete('/users/:id/bookmarks', deleteBookmark)

// ------------------------FRIENDS------------------------ 
router.get('/users/:id/friends', getAllFriends)

router.delete('users/:id/friends', unFriend)



module.exports = router;