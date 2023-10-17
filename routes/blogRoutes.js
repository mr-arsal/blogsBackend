const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogController');

router.post('/posts', blogPostController.createBlogPost);
router.get('/posts', blogPostController.getAllBlogPosts);
router.get('/posts/:id', blogPostController.getBlogPostById);
router.put('/posts/:id', blogPostController.updateBlogPost);
router.delete('/posts/:id', blogPostController.deleteBlogPost);

module.exports = router;
