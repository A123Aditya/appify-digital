const Contact = require('../models/Contact');
const { sendEmail } = require('../config/email');

// Create a new contact
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, businessType, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create contact
    const contact = new Contact({
      name,
      email,
      phone,
      businessType,
      message,
    });

    await contact.save();

    // Send confirmation email to user
    await sendEmail(
      email,
      'We received your inquiry - Appify Digital',
      `<h2>Thank you for reaching out!</h2>
       <p>Hi ${name},</p>
       <p>We've received your inquiry and our team will get back to you within 24 hours.</p>
       <p>Best regards,<br/>Appify Digital Team</p>`
    );

    // Send notification email to admin
    await sendEmail(
      process.env.SMTP_USER,
      `New Contact Inquiry from ${name}`,
      `<h3>New Contact Submission</h3>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Phone:</strong> ${phone}</p>
       <p><strong>Business Type:</strong> ${businessType}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>`
    );

    res.status(201).json({
      success: true,
      message: 'Your inquiry has been submitted successfully',
    });
  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({ message: 'Failed to submit inquiry' });
  }
};

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch contact' });
  }
};

// Update contact status
exports.updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update contact' });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete contact' });
  }
};
