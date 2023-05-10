const router = require('express').Router()

// middlewares
const verifyToken = require('../helpers/verify-token')

const PostController = require('../controllers/PostController')

router.get('/', PostController.getAllPosts)
router.get('/:id', PostController.getPostById)
router.get('/user/:id', PostController.getUserPosts)

router.post('/create', verifyToken, PostController.create)
router.patch('/edit/:id', verifyToken, PostController.editPost)
router.delete('/delete/:id', verifyToken, PostController.deletePost)
 
module.exports = router