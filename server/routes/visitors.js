const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/visitorController');

// Track visitor
router.post('/', visitorController.trackVisitor);

// Get visitor count
router.get('/count', visitorController.getVisitorCount);

// Get visitors with pagination
router.get('/', visitorController.getVisitors);

module.exports = router;
