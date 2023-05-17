const router = require('express').Router()

// middlewares
const verifyToken = require('../helpers/verify-token')

const PostController = require('../controllers/PostController')

router.get('/', PostController.getAllPosts)
router.get('/user/:id', PostController.getUserPosts)
router.get('/:id/:userId', PostController.getPostById)

router.post('/create', verifyToken, PostController.create)
router.patch('/edit/:id', verifyToken, PostController.editPost)
router.delete('/delete/:id', verifyToken, PostController.deletePost)
 
module.exports = router