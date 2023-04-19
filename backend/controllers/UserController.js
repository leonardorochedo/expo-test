const bcrypt = require('bcrypt')

const User = require('../models/User')

module.exports = class UserController {
    static async register(req, res) {
        
    }

    static async getUserById(req, res) {
        const id = req.params.id

        const user = await User.findOne({where: {id: id}})

        if(!user) {
            res.status(404).json({message: 'Usuário não encontrado!'})
            return
        }

        res.status(200).json({ user })
    }
}