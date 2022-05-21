const Users = require('../model/userModel');

async function getUsers(req, res) {
    try {
        const data = await Users.getAllUsers()
        res.json({
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
        res.status(400).json({
            message: `USER WITH ID: ${user_id} DOES NOT EXIST`
        })
    }
    try {
        const data = await Users.getUser(user_id)
        res.status(200).json({
            data
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

async function createUser(req, res) {
    const { username, password, email, first_name, last_name, bio } = req.body
    const userData = {
        username,
        password,
        email,
        first_name,
        last_name,
        bio,
    }

    if (!userData) {
        return res.status(400).json({
            message: 'NO USER INFO PROVIDED'
        })
    }
    try {
        const userInfo = await Users.createUser(userData)
        res.status(201).json({
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
    const data = await Users.getUser(user_id)

    if (!data) {
        res.status(404).json({
            message: `USER WITH ID: ${user_id} DOES NOT EXIST`
        })
    }
    try {
        await Users.deleteUser(user_id)
        return res.send(`SUCCESSFULLY DELETED USER WITH ID: ${user_id}`).status(204);
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

async function updateDescription(req, res) {
    const user_id = Number(req.params.id)
    const { description } = req.body

    const updatedDescription = {
        user_id, 
        description
    }

    if (!user_id) {
        res.status(404).json({
            message: `USER WITH ID: ${user_id} DOES NOT EXIST`
        })
    }
    try {
        const data = await Users.updateDescription(updatedDescription)
        res.status(200).json({
            data
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

async function getBookmarks(req, res) {
    const user_id = req.params.id

    if (!user_id) {
        res.status(400).json({
            message: `USER WITH ID: ${user_id} DOES NOT EXIST`
        })
    }
    try {
        const data = await Users.getBookmarks(user_id)
        res.status(200).json({
            data
        })
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}

// async function addBookmark(req, res) {
//     const { username, password, email, first_name, last_name, bio } = req.body
//     const userData = {
//         username,
//         password,
//         email,
//         first_name,
//         last_name,
//         bio,
//     }

//     if (!userData) {
//         return res.status(400).json({
//             message: 'NO USER INFO PROVIDED'
//         })
//     }
//     try {
//         const userInfo = await Users.addBookmark(userData)
//         res.status(201).json({
//             data: userInfo
//         });
//     } catch (err) {
//         res.status(500).json({
//             message: err.message
//         });
//     }
// }

module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateDescription,
    getBookmarks,
};