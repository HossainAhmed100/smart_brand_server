// models/Banner.js
const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  }
});

const Banner = mongoose.model('Banner', bannerSchema);

const promoBannerSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  }
});

const PupupPromoBanner = mongoose.model('PupupPromoBanner', promoBannerSchema);

// Delivery Charge Schema
const deliveryChargeSchema = new mongoose.Schema({
  deliveryArea: {
    type: String,
    required: true,
  },
  deliveryCost: {
    type: Number,
    required: true,
  },
});

const DeliveryCharge = mongoose.model('DeliveryCharge', deliveryChargeSchema);

// Delivery Charge Schema
const productTypesSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const ProductTypes = mongoose.model('ProductTypes', productTypesSchema);

// Delivery Charge Schema
const sizeGuideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String, 
    required: true
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const SizeGuide = mongoose.model('SizeGuide', sizeGuideSchema);

// Delivery Charge Schema
const categorySchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  key: {
    type: String, 
    required: true
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model('Category', categorySchema);

// Collection Charge Schema
const collectionSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  key: {
    type: String, 
    required: true
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const Collection = mongoose.model('Collection', collectionSchema);

const instagramImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  }
});

const InstagramImage = mongoose.model('InstagramImage', instagramImageSchema);

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SupportContact = mongoose.model('SupportContact', contactSchema);


// Exporting multiple models
module.exports = {
  Banner,
  PupupPromoBanner,
  DeliveryCharge,
  SizeGuide,
  Category,
  InstagramImage,
  Collection,
  ProductTypes,
  SupportContact
};
