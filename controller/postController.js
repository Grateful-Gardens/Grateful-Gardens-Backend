const PostsModel = require('../model/postsModel')

async function fetchPosts(req, res) {
    try {
        const data = await PostsModel.getAllPosts()
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

async function createPost(req, res) {
    const { hashtag, image, description, user_id } = req.body
    const postData = {
        hashtag,
        image,
        description,
        user_id
    }
    if (!postData) {
        return res.status(400).json({
            message: 'You have to enter text'
        })
    }
    try {
        const postInfo = await PostsModel.createPost(postData)
        res.status(201).json({
            data: postInfo
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

async function deleteAPost(req, res) {
    const post_id = req.params.id
    const data = await PostsModel.findSpecificPost(post_id)

    if (!data) {
        return res.status(404).json({
            message: `Post with id ${post_id} doesn't exist!`
        })
    }
    try {
        await PostsModel.deleteAPost(post_id)
        return res.send(`Deleted ${post_id}`).status(204)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })

    }
}

async function hashTagPost(req, res) {
    const hashtag = req.params.id

    if (!hashtag) {
        res.status(400).json({
            message: `No post with hashtag of ${hashtag}`
        });
    }
    try {
        const data = await PostsModel.findPostByHashTag(hashtag)
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}


async function updatePosts(req, res) {
    const post_id = req.params.id
    const { description } = req.body

    if (!post_id) {
        res.status(404).json({
            message: `No post with id: ${post_id}`
        })
    }
    try {
        const data = await PostsModel.updatePosts(post_id, description)
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

async function getAllOfUsersPost(req, res) {
    const user_id = req.params.id

    if (!user_id) {
        res.status(404).json({
            message: `User ${user_id} doesn't have any post to show`
        })
    }
    try {
        const data = await PostsModel.getAllOfAUsersPost(user_id)
        res.status(200).json({
            data
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = {
    fetchPosts,
    createPost,
    updatePosts,
    hashTagPost,
    deleteAPost,
    getAllOfUsersPost
}