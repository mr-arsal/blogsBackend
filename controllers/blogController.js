const BlogPost = require('../models/blogsModel');

// Create a new blog post
const createBlogPost = async (req, res) => {
    try {
        const { title, description, content } = req.body;
        const post = await BlogPost.create({ title, description, content });
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating a blog post' });
    }
};

// Read all blog posts
const getAllBlogPosts = async (req, res) => {
    try {
        const posts = await BlogPost.findAll();
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching blog posts' });
    }
};

// Read a single blog post by ID
const getBlogPostById = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await BlogPost.findByPk(postId);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Blog post not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching the blog post' });
    }
};

// Update a blog post by ID
const updateBlogPost = async (req, res) => {
    const postId = req.params.id;
    try {
        const [updated] = await BlogPost.update(req.body, {
            where: { id: postId },
        });
        if (updated) {
            const updatedPost = await BlogPost.findByPk(postId);
            return res.json(updatedPost);
        }
        res.status(404).json({ error: 'Blog post not found' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating a blog post' });
    }
};

// Delete a blog post by ID
const deleteBlogPost = async (req, res) => {
    const postId = req.params.id;
    try {
        const deleted = await BlogPost.destroy({
            where: { id: postId },
        });
        if (deleted) {
            res.json({ message: 'Blog post deleted' });
        } else {
            res.status(404).json({ error: 'Blog post not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting a blog post' });
    }
};

module.exports = {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostById,
    updateBlogPost,
    deleteBlogPost,
};
