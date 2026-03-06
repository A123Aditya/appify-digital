const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

// Subscribe to newsletter
router.post('/', newsletterController.subscribe);

// Unsubscribe from newsletter
router.post('/unsubscribe', newsletterController.unsubscribe);

// Get all subscribers (admin would need auth)
router.get('/', newsletterController.getSubscribers);

module.exports = router;
