const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (req, res) => {
  const { fullName, phone, password } = req.body;
  console.log("🚀 ~ exports.registerUser= ~ fullName, phone, password:", fullName, phone, password)

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({ fullName, phone, password });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { phone, password } = req.body;
  console.log("🚀 ~ exports.loginUser= ~ phone, password:", phone, password);

  try {
    // Check if user exists
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(400).json({ message: 'Invalid phone or password' });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid phone or password' });
    }

    // Return user data (excluding sensitive information like password)
    res.status(200).json({
      message: 'Login successful',
      user
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

