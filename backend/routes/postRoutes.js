const express = require('express');
const { createPost, getPosts, deletePost} = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/createpost', authMiddleware, createPost); // Измененный путь
router.get('/', getPosts);

router.delete('/:id', authMiddleware, deletePost); // Route for deleting a post
module.exports = router;
