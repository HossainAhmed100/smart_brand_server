const mongoose = require('mongoose');

const variationSchema = new mongoose.Schema({
    key: String,
    color: String,
    colorImage: String,
    _id: mongoose.Schema.Types.ObjectId
}, { _id: false });

const cartItemSchema = new mongoose.Schema({
    sku: Number,
    title: String,
    brand: String,
    category: String,
    variation: variationSchema,
    thumbnail: String,
    sellingPrice: Number,
    originalPrice: Number,
    productId: mongoose.Schema.Types.ObjectId,
    itemKey: String,
    purchaseQuantity: Number
}, { _id: false });

const deliveryChargeDetailsSchema = new mongoose.Schema({
    deliveryArea: String,
    deliveryCost: Number
}, { _id: false });

const orderSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    deliveryNotes: {
        type: String,
        default: ""
    },
    myCart: [cartItemSchema],
    status: {
        type: String,
        enum: ['newOrder', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'newOrder'
    },
    deliveryChargeDetails: deliveryChargeDetailsSchema
}, { timestamps: true });

const Orders = mongoose.model('Order', orderSchema);

module.exports = Orders;
