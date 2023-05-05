const router = require('express').Router()

// middlewares
const verifyToken = require('../helpers/verify-token')

const UserController = require('../controllers/UserController')

router.get('/myuser', verifyToken, UserController.getMyUser)
router.get('/:id', UserController.getUserById)

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.patch('/edit/:id', verifyToken, UserController.editUser)
router.delete('/delete/:id', verifyToken, UserController.deleteUser)

module.exports = router