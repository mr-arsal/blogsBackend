const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogController');

// Create a new blog post
router.post('/posts', blogPostController.createBlogPost);

// Read all blog posts
router.get('/posts', blogPostController.getAllBlogPosts);

// Read a single blog post by ID
router.get('/posts/:id', blogPostController.getBlogPostById);

// Update a blog post by ID
router.put('/posts/:id', blogPostController.updateBlogPost);

// Delete a blog post by ID
router.delete('/posts/:id', blogPostController.deleteBlogPost);

module.exports = router;
