const router = require('express').Router()

const UserController = require('../controllers/UserController')

router.post('/register', UserController.register)
router.get('/:id', UserController.getUserById)

module.exports = router