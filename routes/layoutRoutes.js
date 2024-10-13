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
  addNewCategory,
  deleteInstagramImage,
  addNewInstagramImage,
  instagramImage,
  getCollection,
  deleteCollection,
  addNewCollection
} = require('../controllers/layoutControler');

// Create a router
const router = express.Router();

router.get('/homePageBanner', homePageBanner);
router.post('/homePageBanner', addNewBanner);
router.delete('/homePageBanner/:itemId', deleteBanner);

router.get('/instagramImage', instagramImage);
router.post('/instagramImage', addNewInstagramImage);
router.delete('/instagramImage/:itemId', deleteInstagramImage);


router.post('/deliveryCharge', addDeliveryChargerOption);
router.get('/deliveryCharge', getDeliveryChargerOptions);
router.delete('/deliveryCharge/:itemId', deleteDeliveryChargerOption);


router.get('/sizeGuide/', getSizeGuide);
router.delete('/sizeGuide/:itemId', deleteSizeGuide);
router.post('/sizeGuide/', addNewSizeGuide);


router.get('/category/', getCategory);
router.delete('/category/:itemId', deleteCategory);
router.post('/category/', addNewCategory);


router.get('/collection/', getCollection);
router.delete('/collection/:itemId', deleteCollection);
router.post('/collection/', addNewCollection);


module.exports = router;
