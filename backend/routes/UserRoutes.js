const router = require('express').Router()

// middlewares
const verifyToken = require('../helpers/verify-token')

const UserController = require('../controllers/UserController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/:id', UserController.getUserById)

router.patch('/edit/:id', verifyToken, UserController.editUser)
router.delete('/delete/:id', verifyToken, UserController.deleteUser)

module.exports = router