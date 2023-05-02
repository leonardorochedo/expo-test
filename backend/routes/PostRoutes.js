const router = require('express').Router()

// middlewares
const verifyToken = require('../helpers/verify-token')

const PostController = require('../controllers/PostController')

// router.get('/', PostController.getPosts)
router.post('/create', verifyToken, PostController.create)
 
module.exports = router