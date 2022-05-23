const Users = require('../model/userModel');

// ------------------------USERS------------------------ 
async function getUsers(req, res) {
    try {
        const data = await Users.getAllUsersFromDB()
        return res.json({
            data
        })
    } catch (err) {
        res.statusCode = 200;
        res.json({
            message: err.message
        })
    }
}

async function getUser(req, res) {
    const user_id = req.params.id

    if (!user_id) {
        return res.status(400).json({
            message: `USER WITH ID: ${user_id} DOES NOT EXIST`
        })
    }
    try {
        const data = await Users.getUserFromDB(user_id)
        return res.status(200).json({
            data
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

async function createUser(req, res) {
    const { username, password, email, first_name, last_name } = req.body
    const userData = {
        username,
        password,
        email,
        first_name,
        last_name,
    }

    if (!userData) {
        return res.status(400).json({
            message: 'NO USER INFO PROVIDED'
        })
    }
    try {
        const userInfo = await Users.createUserFromDB(userData)
        return res.status(201).json({
            data: userInfo
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function deleteUser(req, res) {
    const user_id = req.params.id
    const data = await Users.getUserFromDB(user_id)

    if (!data) {
        return res.status(404).json({
            message: `USER WITH ID: ${user_id} DOES NOT EXIST`
        })
    }
    try {
        await Users.deleteUserFromDB(user_id)
        return res.send(`SUCCESSFULLY DELETED USER WITH ID: ${user_id}`).status(204);
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

async function updateUserInfo(req, res) {
    const user_id = req.params.id 
    const { bio, city, country, longer_bio } = req.body
    
    const updateInfo = {
        user_id,
        bio,
        city, 
        country, 
        longer_bio
    }

    if (!user_id) {
        return res.status(404).json({
            message: `USER WITH ID: ${user_id} DOES NOT EXIST`
        })
    }
    try {
        const data = await Users.updateUserInfoFromDB(updateInfo)
        return res.status(200).json({
            data
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

// ------------------------BOOKMARKS------------------------ 
async function getBookmarks(req, res) {
    const user_id = req.params.id

    if (!user_id) {
        return res.status(400).json({
            message: `USER WITH ID: ${user_id} DOES NOT EXIST`
        })
    }
    try {
        const data = await Users.getBookmarksFromDB(user_id)
        return res.status(200).json({
            data
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

async function addBookmark(req, res) {
    const { post_id } = req.body
    const user_id = req.params.id

    if (!post_id) {
        return res.status(400).json({
            message: 'THIS POST DOES NOT EXIST'
        })
    }
    try {
        const userInfo = await Users.addBookmarkFromDB(post_id, user_id)
        return res.status(201).json({
            data: userInfo
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function deleteBookmark(req, res) {
    const user_id = req.params.id
    const { post_id } = req.body

    if (!post_id) {
        return res.status(404).json({
            message: `USER WITH ID: ${user_id} DOES NOT EXIST`
        })
    }
    try {
        const deleteInfo = await Users.deleteBookmarkFromDB(user_id, post_id)
        return res.status(200).json({
            deleteInfo
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

// ------------------------FRIENDS------------------------ 
async function getAllFriends(req, res) {
    const user_id = req.params.id

    try {
        const friends = (await Users.getAllFriendsFromDB(user_id)).map(
            (friend) => ({
                ...friend,
                requested: false,
            })
        )

        const friendsTwo = (await Users.getAllFriendsFromDBTwo(user_id)).map(
            (friend) => ({
                ...friend,
                requested: true,
            })
        )
        return res.status(201).json([...friends, ...friendsTwo])
    } catch (error) {
        res.statusCode = 200;
        res.json({
            message: error.message
        })
    }
}

async function unFriend(req, res) {
    const user_id = req.params.id
    const { friend_two } = req.body

    if (!friend_two) {
        return res.status(404).json({
            message: `FRIENDSHIP WITH ID: ${friend_two} DOES NOT EXIST`
        })
    }
    try {
        const data = await Users.unFriendFromDB({user_id, friend_two});
        return res.status(200).json({
            data,
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

async function sendFriendRequest(req, res) {
    const user_id = req.params.id
    const { friend_two } = req.body
    
    if (!user_id) {
        return res.status(400).json({
            message: 'NO USER INFO PROVIDED'
        })
    }
    try {
        const userInfo = await Users.sendFriendRequestFromDB({user_id, friend_two})
        return res.status(201).json({
            data: userInfo
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

async function acceptFriendRequest(req, res) {
    const user_id = req.params.id
    const { friend_two } = req.body

    if (!user_id) {
        return res.status(400).json({
            message: 'NO USER INFO PROVIDED'
        })
    }
    try {
        const userInfo = await Users.acceptFriendRequestFromDB({user_id, friend_two})
        return res.status(201).json({
            data: userInfo
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}



module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUserInfo,
    getBookmarks,
    getAllFriends,
    unFriend,
    addBookmark,
    deleteBookmark,
    sendFriendRequest,
    acceptFriendRequest
};