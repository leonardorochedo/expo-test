const User = require('../models/User')
const Post = require('../models/Post')

// Helpers
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')

module.exports = class PostController {

    static async getPosts(req, res) {

    }

    static async create(req, res) {
        const {title, description} = req.body

        // validations
        if(!title) {
            res.status(422).json({message: 'O título é obrigatório'})
            return
        }

        if(!description) {
            res.status(422).json({message: 'A descrição é obrigatória'})
            return
        }

        const token = getToken(req)
        const user = await getUserByToken(token)


        const userId = user.id

        console.log(userId)

        // create post
        const post = new Post({
            title,
            description,
            UserId: userId
        })

        try {
            const newPost = await post.save()

            res.status(200).json({
                message: "Publicação criada com sucesso!",
                newPost
            })
        } catch (err) {
            res.status(500).json({message: err})
        }
    }

}