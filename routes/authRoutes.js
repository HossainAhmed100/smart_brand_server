// Import Express and controller functions
const express = require('express');
const { registerUser, loginUser  } = require('../controllers/authController');

// Create a router
const router = express.Router();

// Define routes
router.post('/register', registerUser);
router.post('/login', loginUser );

// Export router
module.exports = router;
