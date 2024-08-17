const Post = require('../models/post');
const User = require('../models/user'); 

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, content, author, categories, tags } = req.body;
    const newPost = new Post({
      title,
      content,
      author,
      categories,
      tags
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username name email');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId).populate('author', 'username name email').exec();

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error });
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { title, content, categories, tags, isPublished } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content, categories, tags, isPublished, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: 'Error updating post', error });
  }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
};

// Like a post
exports.likePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user._id; // Assuming the user ID is available in req.user

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if the user has already liked the post
    if (post.likes.includes(userId)) {
      return res.status(400).json({ message: 'You already liked this post' });
    }

    post.likes.push(userId);
    await post.save();

    res.status(200).json({ message: 'Post liked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error liking post', error });
  }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user._id; // Assuming the user ID is available in req.user

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if the user has liked the post
    if (!post.likes.includes(userId)) {
      return res.status(400).json({ message: 'You have not liked this post' });
    }

    post.likes.pull(userId);
    await post.save();

    res.status(200).json({ message: 'Post unliked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error unliking post', error });
  }
};

// Add a comment to a post
exports.addComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { comment } = req.body;
    const userId = req.user._id; // Assuming the user ID is available in req.user

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.comments.push({
      user: userId,
      comment,
      createdAt: Date.now()
    });

    await post.save();
    res.status(201).json({ message: 'Comment added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding comment', error });
  }
};

// Delete a comment from a post
exports.deleteComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const userId = req.user._id; // Assuming the user ID is available in req.user

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const comment = post.comments.id(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if the comment belongs to the user or if the user is an admin
    if (comment.user.toString() !== userId.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You are not authorized to delete this comment' });
    }

    comment.remove();
    await post.save();

    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting comment', error });
  }
};
