const Newsletter = require('../models/Newsletter');
const { sendEmail } = require('../config/email');

// Subscribe to newsletter
exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if already subscribed
    let subscriber = await Newsletter.findOne({ email });

    if (subscriber) {
      if (subscriber.status === 'subscribed') {
        return res
          .status(400)
          .json({ message: 'This email is already subscribed' });
      }
      subscriber.status = 'subscribed';
    } else {
      subscriber = new Newsletter({ email, status: 'subscribed' });
    }

    await subscriber.save();

    // Send welcome email
    await sendEmail(
      email,
      'Welcome to Appify Digital Newsletter',
      `<h2>Welcome!</h2>
       <p>Thank you for subscribing to our newsletter.</p>
       <p>Stay tuned for updates on web design trends, development tips, and special offers.</p>
       <p>Best regards,<br/>Appify Digital Team</p>`
    );

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ message: 'Failed to subscribe to newsletter' });
  }
};

// Get all subscribers
exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find({ status: 'subscribed' }).sort({
      subscribedAt: -1,
    });
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch subscribers' });
  }
};

// Unsubscribe
exports.unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;
    const subscriber = await Newsletter.findOneAndUpdate(
      { email },
      { status: 'unsubscribed' },
      { new: true }
    );

    res.status(200).json({ message: 'Unsubscribed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to unsubscribe' });
  }
};
