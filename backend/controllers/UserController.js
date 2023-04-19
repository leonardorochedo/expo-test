const bcrypt = require('bcrypt')

const User = require('../models/User')

module.exports = class UserController {
    static async register(req, res) {
        const {name, email, phone, password, confirmpassword} = req.body

        // Validations
        if(!name) {
            res.status(422).json({message: 'O nome é obrigatório'})
            return
        }

        if(!email) {
            res.status(422).json({message: 'O e-mail é obrigatório'})
            return
        }

        if(!phone) {
            res.status(422).json({message: 'O telefone é obrigatório'})
            return
        }

        if(!password) {
            res.status(422).json({message: 'A senha é obrigatória'})
            return
        }

        if(!confirmpassword) {
            res.status(422).json({message: 'A confirmação de senha é obrigatória'})
            return
        }

        // check if passwords match
        if(password !== confirmpassword) {
            res.status(422).json({message: 'As senhas não batem!'})
            return
        }

        // check if user exists
        const userExists = await User.findOne({email: email})

        if(userExists) {
            res.status(422).json({message: 'Por favor, utilize outro e-mail!'})
            return
        }

        // create a password encrypted
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        // create user
        const user = new User({
            name,
            email,
            phone,
            password: passwordHash
        })

        try {
            const newUser = await user.save() // isert newUser
            
            // login user, incluindo um header de verificacao nele
            await createUserToken(newUser, req, res)
        } catch(err) {
            res.status(500).json({message: err})
        }
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