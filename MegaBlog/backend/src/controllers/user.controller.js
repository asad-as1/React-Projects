const User = require('../models/user');
const Post = require('../models/post')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config(); 


// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Login an existing user
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password'); // Exclude the password field
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { username, name, bio, profilePicture } = req.body;

    // Find the user by ID and update the fields
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { username, name, bio, profilePicture },
      { new: true, runValidators: true }
    ).select('-password'); // Exclude the password field

    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// Delete a user account and associated data
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    await Post.deleteMany({ author: userId });

    // Inside the deleteUser function
    await Post.updateMany({ likes: userId }, { $pull: { likes: userId } });
    await Post.updateMany({ 'comments.user': userId }, { $pull: { comments: { user: userId } } });
    

    res.status(200).json({ message: 'User account and associated data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};