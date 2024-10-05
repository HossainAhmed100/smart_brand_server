const mongoose = require('mongoose');

const variationSchema = new mongoose.Schema({
  color: { type: String, required: true },
  colorCode: { type: String, required: true },
  colorImage: { type: String, required: true },
  image: { type: String, required: true }
});

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, required: true },
  new: { type: Boolean, default: false },
  sale: { type: Boolean, default: false },
  rate: { type: Number, default: 0 },
  price: { type: Number, required: true },
  originPrice: { type: Number, required: true },
  brand: { type: String, required: true },
  sold: { type: Number, default: 0 },
  quantity: { type: Number, required: true },
  quantityPurchase: { type: Number, default: 1 },
  sizes: [{ type: String, required: true }],
  tag: [{ type: String, required: true }],
  variation: [variationSchema],
  thumbImage: [{ type: String, required: true }],
  images: [{ type: String, required: true }],
  description: { type: String, required: true },
  action: { type: String, required: true },
  slug: { type: String, required: true },
  sku: { type: String, required: true }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
