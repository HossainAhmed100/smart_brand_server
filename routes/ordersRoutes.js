// Import Express and controller functions
const express = require('express');
const { createNewOrder, getAllMyOrders, getOrderDetailsAdmin, updatedOrderStatus, getAllOrdersAdmin, getMyOrdersDetails } = require('../controllers/ordersControler');
const { verifyToken, verifyAdmin } = require('../middleware/auth');

// Create a router
const router = express.Router();

// Define routes
router.get('/getMyOrders/:email', verifyToken, getAllMyOrders);
router.get('/getOrderDetailsAdmin/:id', verifyAdmin, getOrderDetailsAdmin);
router.get('/getMyOrdersDetails/:id', verifyToken, getMyOrdersDetails);
router.get('/getAllOrdersAdmin', verifyToken, verifyAdmin, getAllOrdersAdmin);
router.put('/updatedOrderStatus/:id', verifyAdmin, updatedOrderStatus);
router.post('/', createNewOrder);

// Export router
module.exports = router;
