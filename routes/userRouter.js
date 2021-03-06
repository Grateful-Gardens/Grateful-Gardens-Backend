const router = require('express').Router();;
const { getUsers, createUser, deleteUser, getUser, updateUserInfo, getBookmarks, getAllFriends, unFriend, addBookmark, deleteBookmark, addFriend, login, getProfile } = require('../controller/userController')

// ------------------------USERS------------------------ 
router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.post('/signup', createUser);

router.post('/login', login)

router.delete('/users/:id', deleteUser)

router.put('/profile/:id', updateUserInfo)

router.get('/profile/:id', getProfile)

// ------------------------BOOKMARKS------------------------ 
// router.get('/users/:id/bookmarks', getBookmarks)

// router.post('/users/:id/bookmarks', addBookmark)

// router.delete('/users/:id/bookmarks', deleteBookmark)

// ------------------------FRIENDS------------------------ 
router.get('/users/:id/friends', getAllFriends)

router.delete('/users/:id/friends', unFriend)

router.post('/users/:id/friends', addFriend);

// router.put('/users/:id/friends', acceptFriendRequest);

module.exports = router;