const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  planName: {
    type: String,
    enum: ['Starter', 'Business', 'Premium'],
    required: true,
  },
  name: String,
  email: String,
  phone: String,
  businessType: String,
  amount: Number,
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);
