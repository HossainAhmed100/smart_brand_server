// Import Product model
const orders = require('../models/Orders');

// Get all products with optional quantity limit
exports.getAllMyOrders = async (req, res) => {
    const {email} = req.params;
    try {
        const orderList = await orders.find({email});
        res.json(orderList);
    } catch (error) {
        console.error('Error fetching orderList:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Get all Order List - Admin 
// Get all orders - Admin
exports.getAllOrdersAdmin = async (req, res) => {
    try {
        // Fetch all orders from the database
        const ordersList = await orders.find();
        
        // Send the list of orders in the response
        res.status(200).json(ordersList);
    } catch (error) {
        console.error('Error fetching all orders for admin:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Get Order Details by Order ID fro Admin
exports.getOrderDetailsAdmin = async (req, res) => {
    const {id} = req.params;
    try {
        const orderInfo = await orders.findById(id);
        res.json(orderInfo);
    } catch (error) {
        console.error('Error fetching order details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get Order Details by Order ID fro Admin
exports.getMyOrdersDetails = async (req, res) => {
    const {id} = req.params;
    try {
        const orderInfo = await orders.findById(id);
        res.json(orderInfo);
    } catch (error) {
        console.error('Error fetching order details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



// Updtae Order Status By Order ID - Admin
exports.updatedOrderStatus = async (req, res) => {
    const { status } = req.body;
    const {id} = req.params;

    try {
        const orderInfo = await orders.findById(id);
        if (!orderInfo) {
            return res.status(404).json({ message: 'Orders not found' });
        }
        orderInfo.status = status || orderInfo.status;

        await orderInfo.save();
        res.json(orderInfo);
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: 'Server error When Update Orders Status' });
    }
};


exports.createNewOrder = async (req, res) => {
    // Extract product data from request body
    const productData = req.body;

    // Create a new product instance
    const newOrder = new orders(productData);

    try {
        // Save the new product to the database
        const saveOrder = await newOrder.save();
        res.status(201).json(saveOrder);
    } catch (error) {
        console.error('Error saving producnew order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
