const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/auth');

// Admin login
router.post('/login', adminController.login);

// Get dashboard stats (admin only)
router.get('/stats', authMiddleware, adminController.getStats);

// Get all contacts (admin only)
router.get('/contacts', authMiddleware, adminController.getContacts);

// Get all orders (admin only)
router.get('/orders', authMiddleware, adminController.getOrders);

module.exports = router;
