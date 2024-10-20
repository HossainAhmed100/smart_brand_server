// Import Express and controller functions
const express = require('express');
const { register, login } = require('../controllers/adminAuthControler');
const { verifyAdminPanel } = require('../middleware/auth');

// Create a router
const router = express.Router();

// Define routes
router.post('/roleregister', register);
router.post('/rolelogin', login);
router.get('/rolecheck', verifyAdminPanel);


// Export router
module.exports = router;
