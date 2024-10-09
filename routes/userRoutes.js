const express = require('express');
const router = express.Router();
const { getUserByEmail, getAllUsers, updateUserById } = require('../controllers/userController');

// Get user by email
router.get('/:email', getUserByEmail);

// Get all users (admin only)
router.get('/', getAllUsers);

// Update user
router.put('/:userId', updateUserById);

module.exports = router;
