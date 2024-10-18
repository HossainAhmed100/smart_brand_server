
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deliveryChargeDetailsSchema = new mongoose.Schema({
    deliveryArea: String,
    deliveryCost: Number
}, { _id: false });

const variationSchema = new Schema({
  color: String,
  colorCode: String,
  colorImage: String,
  image: String,
});

const cartItemSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: 'Product' },
  category: String,
  type: String,
  name: String,
  gender: String,
  new: Boolean,
  sale: Boolean,
  rate: Number,
  price: Number,
  originPrice: Number,
  brand: String,
  sizeGuide: String,
  sold: Number,
  quantity: Number,
  quantityPurchase: Number,
  sizes: [String],
  tag: [String],
  variation: [variationSchema],
  thumbImage: [String],
  images: [String],
  description: String,
  action: String,
  slug: String,
  sku: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  selectedSize: String,
  selectedColor: String,
});

const orderSchema = new Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  deliveryNotes: { type: String, default: '' },
  status: { type: String, enum: ['newOrder', 'processing', 'shipped', 'delivered', 'cancelled'], default: 'newOrder' },
  deliveryChargeDetails: deliveryChargeDetailsSchema,
  myCart: [cartItemSchema],
}, { timestamps: true });

const Orders = mongoose.model('Order', orderSchema);

module.exports = Orders;
