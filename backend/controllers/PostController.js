const User = require('../models/User')
const Post = require('../models/Post')

// Helpers
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')

module.exports = class PostController {

    static async getAllPosts(req, res) {
        const posts = await Post.findAll({
            include: User,
            order: [['createdAt']],
        })

        if(!posts) {
            res.status(204).json({message: 'Nenhuma publicação encontrada'})
            return
        }

        try {
            res.status(200).json({ posts })
        } catch (err) {
            res.status(500).json({message: err})
        }
    }

    static async getPostById(req, res) {
        const id = req.params.id

        const post = await Post.findOne({where: {id: id}})

        if(!post) {
            res.status(204).json({message: 'Nenhuma publicação encontrada'})
            return
        }

        try {
            res.status(200).json({ post })
        } catch (err) {
            res.status(500).json({message: err})
        }
    }

    static async getUserPosts(req, res) {
        const id = req.params.id

        const posts = await Post.findAll({
            include: User,
            where: { UserId: id },
            order: [['createdAt']],
        })

        if(!posts) {
            res.status(204).json({message: 'Nenhuma publicação encontrada'})
            return
        }

        try {
            res.status(200).json({ posts })
        } catch (err) {
            res.status(500).json({message: err})
        }
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

        // create post
        const post = new Post({
            title,
            description,
            UserId: user.id
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

    static async editPost(req, res) {
        const id = req.params.id

        const post = await Post.findOne({where: {id: id}})

        if(!post) {
            res.status(204).json({message: 'Nenhuma publicação encontrada'})
            return
        }

        const token = getToken(req)
        const user = await getUserByToken(token)
        const userId = user.id

        if(userId != post.UserId) {
            res.status(401).json({message: 'Você não é autorizado para editar esta publicação'})
            return
        }

        const {title, description} = req.body

        if(!title) {
            res.status(422).json({message: 'O título é obrigatório'})
            return
        }

        post.title = title

        if(!description) {
            res.status(422).json({message: 'A descrição é obrigatória'})
            return
        }

        post.description = description

        try {
            await post.update(post.dataValues, {where: {id: post.id}})

            res.status(200).json({message: 'Publicação atualizada com sucesso!', post})
        } catch (err) {
            res.status(500).json({message: err})
        }
    }

    static async deletePost(req, res) {
        const id = req.params.id

        const post = await Post.findOne({where: {id: id}})

        if(!post) {
            res.status(204).json({message: 'Nenhuma publicação encontrada'})
            return
        }

        const token = getToken(req)
        const user = await getUserByToken(token)
        const userId = user.id

        if(userId != post.UserId) {
            res.status(401).json({message: 'Você não é autorizado para deletar esta publicação'})
            return
        }

        try {
            await post.destroy()

            res.status(200).json({message: 'Publicação deletada com sucesso!'})
        } catch (err) {
            res.status(500).json({message: err})
        }
    }

}