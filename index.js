// Import necessary modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const connectDB = require('./config/db');
connectDB();

// Import routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const userRoutes = require('./routes/userRoutes');
const myCartRoutes = require('./routes/myCartRoutes');
const layoutRoutes = require('./routes/layoutRoutes');
const adminAuthRoutes = require('./routes/adminAuthRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/roleauth', adminAuthRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/users', userRoutes);
app.use('/api/myCart', myCartRoutes);
app.use('/api/layout', layoutRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Smart Original Brand Server is Running");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
