// Import Express and controller functions
const express = require('express');
const { getAllProducts, getProductById, deleteProduct, updateProduct, createProduct, getAllProductsByCategory } = require('../controllers/productController');
const { verifyAdmin } = require('../middleware/auth');
// Create a router
const router = express.Router();

// Define routes
router.get('/', getAllProducts);
router.get('/productsById/:id', getProductById);
router.get('/getAllProductsByCategory', getAllProductsByCategory);
router.delete('/:itemId', deleteProduct);
router.put('/:productId', updateProduct);
router.post('/addnewProduct', createProduct);

// Export router
module.exports = router;
