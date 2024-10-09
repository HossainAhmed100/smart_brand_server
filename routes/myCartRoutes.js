// Import Express and controller functions
const express = require('express');
const { getMyCartByEmail, removeItemFromMyCartByCartId, updateCartItemQuantityByCartId, addItemInMyCart } = require('../controllers/myCartController');
// Create a router
const router = express.Router();

// Define routes
router.get('/:userEmail', getMyCartByEmail);
router.post('/addToCart', addItemInMyCart);
router.put('/:cartId', updateCartItemQuantityByCartId);
router.delete('/:cartId', removeItemFromMyCartByCartId);

// Export router
module.exports = router;
