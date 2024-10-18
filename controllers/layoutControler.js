const { Banner, PupupPromoBanner, DeliveryCharge, SizeGuide, Category, InstagramImage, Collection, ProductTypes, SupportContact } = require('../models/Layout');

// GET all banner images
exports.homePageBanner = async (req, res) => {
    try {
      const banners = await Banner.find();
        res.json(banners);
    } catch (err) {
      console.log("🚀 ~ exports.homePageBanner= ~ err:", err)
      res.status(500).json({ message: err.message });
    }
};

// POST to update banner images
exports.addNewBanner = async (req, res) => {
    const {image} = req.body; // Array of banner objects
    const imageUrl = image;
    const newBanners = new Banner({imageUrl});
    try {
      // Insert new banners
      const savedBanner = await newBanners.save();
      res.status(201).json(savedBanner);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

// DELETE a banner image
exports.deleteBanner = async (req, res) => {
    const id = req.params.itemId;
    try {
        const result = await Banner.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(result);
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// GET all popup banner images
exports.popupPromoBannerImg = async (req, res) => {
    try {
      const banners = await PupupPromoBanner.find();
        res.json(banners);
    } catch (err) {
      console.log("🚀 ~ exports.homePageBanner= ~ err:", err)
      res.status(500).json({ message: err.message });
    }
};

// POST to update banner images
exports.newPopupPromoBannerImg = async (req, res) => {
    const {image} = req.body; // Array of banner objects
    const imageUrl = image;
    const newBanners = new PupupPromoBanner({imageUrl});
    try {
      // Insert new banners
      const savedBanner = await newBanners.save();
      res.status(201).json(savedBanner);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

// DELETE a banner image
exports.deleteopupPromoBannerImg = async (req, res) => {
    const id = req.params.itemId;
    try {
        const result = await PupupPromoBanner.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(result);
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// GET all banner images
exports.instagramImage = async (req, res) => {
    try {
      const images = await InstagramImage.find();
        res.json(images);
    } catch (err) {
      console.log("🚀 ~ exports.instagramImage= ~ err:", err)
      res.status(500).json({ message: err.message });
    }
};

// POST to update banner images
exports.addNewInstagramImage = async (req, res) => {
    const {image} = req.body; // Array of banner objects
    const imageUrl = image;
    const newImages = new InstagramImage({imageUrl});
    try {
      // Insert new banners
      const savedImages = await newImages.save();
      res.status(201).json(savedImages);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

// DELETE a banner image
exports.deleteInstagramImage = async (req, res) => {
  const id = req.params.itemId;
  try {
    const result = await InstagramImage.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(result);
  } catch (error) {
    console.error('Error deleting Image:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteDeliveryChargerOption = async (req, res) => {
    const id = req.params.itemId;
    try {
        const result = await DeliveryCharge.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(result);
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Add a new delivery charge option
exports.addDeliveryChargerOption = async (req, res) => { 
  const { area, cost } = req.body; // Array of deliveryCharge objects
  const deliveryChargeData = { area, cost };
  const deliveryArea = area;
  const deliveryCost = cost;

  try {
    // Insert new delivery charge
    const newdeliveryChargeData = new DeliveryCharge({deliveryArea,deliveryCost});
    const savedCharge = await newdeliveryChargeData.save(deliveryChargeData);
    res.status(201).json(savedCharge);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Delivery Charger Options
exports.getDeliveryChargerOptions = async (req, res) => { 
  try {
    const deliveryChargeOptions = await DeliveryCharge.find();
    res.json(deliveryChargeOptions);
  } catch (err) {
    console.error("��� ~ exports.getDeliveryChargerOptions= ~ err:", err)
    res.status(500).json({ message: err.message });
  }
};

// Createa New Size Guide
exports.addNewSizeGuide = async (req, res) => {
  const {name, imgUrl, key} = req.body; // Array of banner objects
  console.log("🚀 ~ exports.addNewBanner= ~ egory, img:", name, imgUrl)
  const newSizeGuide = new SizeGuide({name, imgUrl, key});
  try {
    // Insert new banners
    const savedSizeGuide = await newSizeGuide.save();
    res.status(201).json(savedSizeGuide);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Size Guide
exports.getSizeGuide = async (req, res) => {
  try {
    const sizeGuideInfo = await SizeGuide.find();
    res.json(sizeGuideInfo);
  } catch (err) {
    console.log("🚀 ~ exports.sizeGuideInfo= ~ err:", err)
    res.status(500).json({ message: err.message });
  }
};

// Delete Size Guide
exports.deleteSizeGuide = async (req, res) => {
  const id = req.params.itemId;
  try {
    const result = await SizeGuide.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Size Guide not found' });
    }
    res.json(result);
  } catch (error) {
    console.error('Error Size Guide:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Createa New Size Guide
exports.addNewCategory = async (req, res) => {
  const {label, imgUrl, path, key} = req.body; // Array of banner objects
  const newCategory = new Category({label, path, imgUrl, key});
  try {
    // Insert new banners
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Size Guide
exports.getCategory = async (req, res) => {
  try {
    const categoryInfo = await Category.find();
    res.json(categoryInfo);
  } catch (err) {
    console.log("🚀 ~ exports.categoryInfo= ~ err:", err)
    res.status(500).json({ message: err.message });
  }
};

// Delete Size Guide
exports.deleteCategory = async (req, res) => {
  const id = req.params.itemId;
  try {
    const result = await Category.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(result);
  } catch (error) {
    console.error('Error Category:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Createa New Size Guide
exports.addNewCollection = async (req, res) => {
  const {label, imgUrl, path, key} = req.body; // Array of banner objects
  const newCollection = new Collection({label, path, imgUrl, key});
  try {
    // Insert new banners
    const savedCollection = await newCollection.save();
    res.status(201).json(savedCollection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Size Guide
exports.getCollection = async (req, res) => {
  try {
    const categoryInfo = await Collection.find();
    res.json(categoryInfo);
  } catch (err) {
    console.log("🚀 ~ exports.categoryInfo= ~ err:", err)
    res.status(500).json({ message: err.message });
  }
};

// Delete Size Guide
exports.deleteCollection = async (req, res) => {
  const id = req.params.itemId;
  try {
    const result = await Collection.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Collection not found' });
    }
    res.json(result);
  } catch (error) {
    console.error('Error Collection:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete Product Types
exports.deleteProductTypes = async (req, res) => {
  const id = req.params.itemId;
  try {
      const result = await ProductTypes.findByIdAndDelete(id);
      if (!result) {
          return res.status(404).json({ message: 'Product Types not found' });
      }
      res.json(result);
  } catch (error) {
      console.error('Error deleting Product Types:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

// Add a new Product Types
exports.addProductTypes = async (req, res) => { 
const { label, path } = req.body; // Array of ProductTypes
console.log(label, path)
try {
  // Insert new Product Types
  const newProductTypeData = new ProductTypes({label,path});
  const savedCharge = await newProductTypeData.save();
  res.status(201).json(savedCharge);
} catch (err) {
  res.status(500).json({ message: err.message });
}
};

// Get All Product Types
exports.getAllProductTypes = async (req, res) => { 
try {
  const allproductTypes = await ProductTypes.find();
  res.json(allproductTypes);
} catch (err) {
  console.error("Error when Get All Product Types", err)
  res.status(500).json({ message: err.message });
}
};

// Create a new Support Message
exports.createSupportMessage = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;
    // Validate that all fields are provided
    if (!fullName || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new contact document
    const newContact = new SupportContact({ fullName, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Message sent successfully!', data: newContact });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
}

// Get All Support Mesage
exports.getAllSuppportMessage = async (req, res) => { 
  try {
    const messages = await SupportContact.find();
    res.json(messages);
  } catch (err) {
    console.error("Error when Get All Support Message", err)
    res.status(500).json({ message: err.message });
  }
  };
  

