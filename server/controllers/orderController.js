const Order = require('../models/Order');
const { sendEmail } = require('../config/email');

// Create an order
exports.createOrder = async (req, res) => {
  try {
    const { planName, name, email, phone, businessType } = req.body;

    if (!planName || !name || !email || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Get plan price
    const prices = {
      Starter: 4999,
      Business: 9999,
      Premium: 19999,
    };

    const amount = prices[planName];

    const order = new Order({
      planName,
      name,
      email,
      phone,
      businessType,
      amount,
      paymentStatus: 'pending',
    });

    await order.save();

    // Send order confirmation email
    await sendEmail(
      email,
      `Order Confirmation - ${planName} Plan`,
      `<h2>Thank you for your order!</h2>
       <p>Hi ${name},</p>
       <p>Your order has been received. Our team will contact you shortly.</p>
       <p><strong>Plan:</strong> ${planName}</p>
       <p><strong>Amount:</strong> ₹${amount}</p>
       <p>Best regards,<br/>Appify Digital Team</p>`
    );

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      order,
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ message: 'Failed to create order' });
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

// Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { paymentStatus } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { paymentStatus },
      { new: true }
    );
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order' });
  }
};
