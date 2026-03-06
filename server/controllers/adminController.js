const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Contact = require('../models/Contact');
const Visitor = require('../models/Visitor');
const Order = require('../models/Order');
const Newsletter = require('../models/Newsletter');

// Admin login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // For demo, hardcode credentials
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        { email, role: 'admin' },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      return res.status(200).json({
        success: true,
        token,
        message: 'Login successful',
      });
    }

    // Check in database
    const user = await User.findOne({ email, role: 'admin' });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      success: true,
      token,
      message: 'Login successful',
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
};

// Get dashboard stats
exports.getStats = async (req, res) => {
  try {
    const [visitors, contacts, orders, newsletters] = await Promise.all([
      Visitor.countDocuments(),
      Contact.countDocuments(),
      Order.countDocuments(),
      Newsletter.countDocuments({ status: 'subscribed' }),
    ]);

    res.status(200).json({
      visitors,
      contacts,
      orders,
      newsletter: newsletters,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
};

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
};

// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};
