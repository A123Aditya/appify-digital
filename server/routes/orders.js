const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/auth');

// Create order
router.post('/', orderController.createOrder);

// Get all orders (admin only)
router.get('/', authMiddleware, orderController.getOrders);

// Update order status (admin only)
router.patch('/:id/status', authMiddleware, orderController.updateOrderStatus);

module.exports = router;
