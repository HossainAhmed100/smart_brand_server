// Import Express and controller functions
const express = require('express');
const { createNewOrder, getAllMyOrders, getOrderDetailsAdmin, updatedOrderStatus, getAllOrdersAdmin, getMyOrdersDetails } = require('../controllers/ordersControler');
const { verifyToken, verifyAdmin } = require('../middleware/auth');

// Create a router
const router = express.Router();

// Define routes
router.get('/getMyOrders/:email', getAllMyOrders);
router.get('/getOrderDetailsAdmin/:id', getOrderDetailsAdmin);
router.get('/getMyOrdersDetails/:id', getMyOrdersDetails);
router.get('/getAllOrdersAdmin', getAllOrdersAdmin);
router.put('/updatedOrderStatus/:id', updatedOrderStatus);
router.post('/', createNewOrder);

// Export router
module.exports = router;
