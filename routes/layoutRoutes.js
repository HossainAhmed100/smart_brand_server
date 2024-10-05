// Import Express and controller functions
const express = require('express');
const { verifyAdmin } = require('../middleware/auth');
const { 
  homePageBanner, 
  addNewBanner, 
  deleteBanner, 
  addDeliveryChargerOption, 
  getDeliveryChargerOptions, 
  addNewSizeGuide, 
  deleteDeliveryChargerOption, 
  getSizeGuide,
  deleteSizeGuide,
  getCategory,
  deleteCategory,
  addNewCategory
} = require('../controllers/layoutControler');

// Create a router
const router = express.Router();

router.get('/homePageBanner', homePageBanner);
router.post('/homePageBanner', verifyAdmin, addNewBanner);
router.delete('/homePageBanner/:itemId', verifyAdmin, deleteBanner);


router.post('/deliveryCharge', verifyAdmin, addDeliveryChargerOption);
router.get('/deliveryCharge', getDeliveryChargerOptions);
router.delete('/deliveryCharge/:itemId', verifyAdmin, deleteDeliveryChargerOption);


router.get('/sizeGuide/', getSizeGuide);
router.delete('/sizeGuide/:itemId', deleteSizeGuide);
router.post('/sizeGuide/', verifyAdmin, addNewSizeGuide);


router.get('/category/', getCategory);
router.delete('/category/:itemId', deleteCategory);
router.post('/category/', verifyAdmin, addNewCategory);


module.exports = router;
