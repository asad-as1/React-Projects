const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const { authenticate } = require('../middlewares/auth'); 


router.post('/newPost', postController.createPost);  // while testing authenticate is not required
// router.post('/newPost', authenticate, postController.createPost);
router.get('/posts', postController.getAllPosts);
router.get('/posts/:postId', postController.getPostById);
router.put('/posts/:postId', authenticate, postController.updatePost);
router.delete('/posts/:postId', authenticate, postController.deletePost);
router.post('/posts/:postId/like', authenticate, postController.likePost);
router.post('/posts/:postId/unlike', authenticate, postController.unlikePost);
router.post('/posts/:postId/comments', authenticate, postController.addComment);
router.delete('/posts/:postId/comments/:commentId', authenticate, postController.deleteComment);

module.exports = router;