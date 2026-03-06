const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const authMiddleware = require('../middleware/auth');

// Create contact
router.post('/', contactController.createContact);

// Get all contacts (admin only)
router.get('/', authMiddleware, contactController.getContacts);

// Get contact by ID (admin only)
router.get('/:id', authMiddleware, contactController.getContactById);

// Update contact status (admin only)
router.patch('/:id/status', authMiddleware, contactController.updateContactStatus);

// Delete contact (admin only)
router.delete('/:id', authMiddleware, contactController.deleteContact);

module.exports = router;
