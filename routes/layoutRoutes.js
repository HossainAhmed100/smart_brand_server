// Import Express and controller functions
const express = require('express');
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
router.post('/homePageBanner', addNewBanner);
router.delete('/homePageBanner/:itemId', deleteBanner);


router.post('/deliveryCharge', addDeliveryChargerOption);
router.get('/deliveryCharge', getDeliveryChargerOptions);
router.delete('/deliveryCharge/:itemId', deleteDeliveryChargerOption);


router.get('/sizeGuide/', getSizeGuide);
router.delete('/sizeGuide/:itemId', deleteSizeGuide);
router.post('/sizeGuide/', addNewSizeGuide);


router.get('/category/', getCategory);
router.delete('/category/:itemId', deleteCategory);
router.post('/category/', addNewCategory);


module.exports = router;
