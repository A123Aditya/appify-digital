const Visitor = require('../models/Visitor');

// Track a visitor
exports.trackVisitor = async (req, res) => {
  try {
    const ip = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('user-agent');

    const visitor = new Visitor({ ip, userAgent });
    await visitor.save();

    const count = await Visitor.countDocuments();
    res.status(201).json({ message: 'Visitor tracked', count });
  } catch (error) {
    console.error('Visitor tracking error:', error);
    res.status(500).json({ message: 'Failed to track visitor' });
  }
};

// Get visitor count
exports.getVisitorCount = async (req, res) => {
  try {
    const count = await Visitor.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch visitor count' });
  }
};

// Get visitors with pagination
exports.getVisitors = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const visitors = await Visitor.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Visitor.countDocuments();

    res.status(200).json({
      visitors,
      total,
      pages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch visitors' });
  }
};
