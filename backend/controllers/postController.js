const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { title, body } = req.body;
    try {
        const post = await Post.create({ title, body, author: req.user._id });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deletePost = async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        // Check if the user is the author of the post
        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: 'You are not authorized to delete this post' });
        }
        await post.remove();
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};