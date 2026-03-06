'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaBell } from 'react-icons/fa';
import apiClient from '@/libs/api';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      await apiClient.post('/api/newsletter', { email });
      setResponse({
        success: true,
        message: 'Successfully subscribed to our newsletter!',
      });
      setEmail('');
      setTimeout(() => setResponse(null), 5000);
    } catch (error) {
      setResponse({
        success: false,
        message: error.response?.data?.message || 'Failed to subscribe. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-purple/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-gradient-to-bl from-cyan/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaBell className="text-cyan text-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Stay Updated with <span className="gradient-text-premium">Latest News</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest updates on web design trends, tips, and special offers.
          </p>
        </motion.div>

        {/* Newsletter Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8"
        >
          <div className="flex-1 relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-900 border border-purple/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition-colors"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="px-8 py-4 bg-gradient-to-r from-purple to-cyan text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </motion.form>

        {/* Response Message */}
        {response && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-block px-6 py-3 rounded-lg ${
              response.success
                ? 'bg-green-500/20 border border-green-500 text-green-300'
                : 'bg-red-500/20 border border-red-500 text-red-300'
            }`}
          >
            {response.message}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
