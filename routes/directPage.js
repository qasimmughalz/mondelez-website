const express =require('express');
const router = express.Router();
const getDirect = require('../controllers/mainDirect');

router.get('/',getDirect.getHomePage);

// router.get('/indexClient',postDirect.getClientPage);
router.get('/contact',getDirect.getContactPage);
router.get('/about',getDirect.getAboutPage);
router.get('/page4',getDirect.getPage4);
router.get('/page5',getDirect.getPage5);
router.get('/page6',getDirect.getPage6);
router.get('/page7',getDirect.getPage7);
router.get('/page8',getDirect.getPage8);
router.get('/page9',getDirect.getPage9);
router.get('/page10',getDirect.getPage10);
router.get('/page11',getDirect.getPage11);
router.get('/page12',getDirect.getPage12);






module.exports = router;