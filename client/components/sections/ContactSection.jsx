'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import apiClient from '@/libs/api';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'website',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const result = await apiClient.post('/api/contacts', formData);
      setResponse({ success: true, message: 'Message sent successfully!' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: 'website',
        message: '',
      });

      // Clear response after 5 seconds
      setTimeout(() => setResponse(null), 5000);
    } catch (error) {
      setResponse({
        success: false,
        message: error.response?.data?.message || 'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-bl from-purple/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-cyan/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text-premium">Touch with Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Contact Info Cards */}
          {[
            {
              icon: FaPhone,
              title: 'WhatsApp Us',
              content: '+91 8877403146',
              link: 'https://wa.me/8877403146',
            },
            {
              icon: FaMapMarkerAlt,
              title: 'Location',
              content: 'India',
              link: null,
            },
            {
              icon: FaPaperPlane,
              title: 'Email Us',
              content: 'contact@appifydigital.com',
              link: 'mailto:contact@appifydigital.com',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="rounded-xl bg-gradient-card border border-purple/20 hover:border-cyan/50 transition-all p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple to-cyan flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan hover:text-purpleLight transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-300">{item.content}</p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-xl bg-gradient-card border border-purple/20 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-white font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-purple/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition-colors"
                placeholder="Your name"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-purple/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition-colors"
                placeholder="your@email.com"
              />
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-white font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-purple/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </motion.div>

            {/* Business Type */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-white font-semibold mb-2">Business Type</label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-purple/30 text-white focus:outline-none focus:border-cyan transition-colors"
              >
                <option value="website">Website Development</option>
                <option value="restaurant">Restaurant Website</option>
                <option value="salon">Salon & Spa</option>
                <option value="ecommerce">E-commerce Store</option>
                <option value="mobile_app">Mobile App</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-purple/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </motion.div>

            {/* Response Message */}
            {response && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  response.success
                    ? 'bg-green-500/20 border border-green-500 text-green-300'
                    : 'bg-red-500/20 border border-red-500 text-red-300'
                }`}
              >
                {response.message}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple to-cyan text-white font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
