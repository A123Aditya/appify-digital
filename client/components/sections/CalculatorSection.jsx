'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator } from 'react-icons/fa';

const CalculatorSection = () => {
  const [features, setFeatures] = useState({
    pages: 5,
    ecommerce: false,
    booking: false,
    onlineMenu: false,
    adminPanel: false,
    paymentGateway: false,
    advancedSEO: false,
  });

  const basePrices = {
    pages: (pages) => 3000 + pages * 500, // Base for pages
    ecommerce: 5000,
    booking: 4000,
    onlineMenu: 2000,
    adminPanel: 3000,
    paymentGateway: 2000,
    advancedSEO: 1500,
  };

  const calculatePrice = () => {
    let total = basePrices.pages(features.pages);
    if (features.ecommerce) total += basePrices.ecommerce;
    if (features.booking) total += basePrices.booking;
    if (features.onlineMenu) total += basePrices.onlineMenu;
    if (features.adminPanel) total += basePrices.adminPanel;
    if (features.paymentGateway) total += basePrices.paymentGateway;
    if (features.advancedSEO) total += basePrices.advancedSEO;
    return total;
  };

  const finalPrice = calculatePrice();

  const featureOptions = [
    { key: 'ecommerce', label: 'E-commerce Store', price: basePrices.ecommerce },
    { key: 'booking', label: 'Booking System', price: basePrices.booking },
    { key: 'onlineMenu', label: 'Online Menu System', price: basePrices.onlineMenu },
    { key: 'adminPanel', label: 'Admin Panel', price: basePrices.adminPanel },
    { key: 'paymentGateway', label: 'Payment Gateway', price: basePrices.paymentGateway },
    { key: 'advancedSEO', label: 'Advanced SEO', price: basePrices.advancedSEO },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-darkBg overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-purple/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCalculator className="text-cyan text-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Website Price <span className="gradient-text-premium">Calculator</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Customize your website and see the estimated cost instantly.
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left Side - Options */}
          <div className="space-y-8">
            {/* Pages Slider */}
            <div className="rounded-xl bg-gradient-card border border-purple/20 p-6">
              <div className="flex justify-between items-center mb-4">
                <label className="text-white font-semibold">Number of Pages</label>
                <span className="text-cyan text-2xl font-bold">{features.pages}</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={features.pages}
                onChange={(e) => setFeatures({ ...features, pages: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>5 Pages</span>
                <span>50 Pages</span>
              </div>
            </div>

            {/* Features Checkboxes */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Select Features</h3>
              {featureOptions.map((feature) => (
                <motion.div
                  key={feature.key}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gradient-card border border-purple/20 hover:border-cyan/50 transition-all cursor-pointer"
                  onClick={() =>
                    setFeatures({
                      ...features,
                      [feature.key]: !features[feature.key],
                    })
                  }
                >
                  <input
                    type="checkbox"
                    checked={features[feature.key]}
                    onChange={() => {}}
                    className="w-5 h-5 cursor-pointer accent-cyan"
                  />
                  <div className="flex-1">
                    <label className="text-white font-semibold cursor-pointer">
                      {feature.label}
                    </label>
                  </div>
                  <span className="text-cyan font-semibold">₹{feature.price}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-xl bg-gradient-card border border-cyan/30 p-8 sticky top-24 h-fit"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Price Breakdown</h3>

            {/* Items */}
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              <div className="flex justify-between items-center pb-4 border-b border-purple/20">
                <span className="text-gray-300">
                  {features.pages} Pages Website
                </span>
                <span className="text-white font-semibold">
                  ₹{basePrices.pages(features.pages).toLocaleString('en-IN')}
                </span>
              </div>

              {featureOptions.map((feature) => {
                if (!features[feature.key]) return null;
                return (
                  <motion.div
                    key={feature.key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-between items-center pb-4 border-b border-purple/20"
                  >
                    <span className="text-gray-300">{feature.label}</span>
                    <span className="text-cyan font-semibold">
                      ₹{feature.price.toLocaleString('en-IN')}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="border-t-2 border-cyan/30 pt-6 mb-6" />

            {/* Total */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-white">Total Estimate</span>
              <motion.span
                key={finalPrice}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-4xl font-bold gradient-text-premium"
              >
                ₹{finalPrice.toLocaleString('en-IN')}
              </motion.span>
            </div>

            {/* Note */}
            <p className="text-xs text-gray-400 mb-6">
              This is an estimate. Final pricing may vary based on specific requirements and complexity.
            </p>

            {/* CTA */}
            <motion.a
              href="https://wa.me/8877403146"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="w-full block text-center px-6 py-3 bg-gradient-to-r from-purple to-cyan text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Get a Custom Quote
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
