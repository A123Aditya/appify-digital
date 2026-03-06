'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const router = useRouter();

  const plans = [
    {
      name: 'Starter',
      price: 4999,
      description: 'Perfect for small businesses getting started online',
      features: [
        '5 Pages',
        'Mobile Responsive',
        'Contact Form',
        'Basic SEO',
        'Domain & Hosting',
        'Email Support',
      ],
      highlighted: false,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Business',
      price: 9999,
      description: 'Ideal for growing businesses with advanced features',
      features: [
        '10 Pages',
        'Booking System',
        'WhatsApp Integration',
        'Google Analytics',
        'SEO Optimization',
        'Premium Support',
        'Payment Gateway Ready',
        'Blog Section',
      ],
      highlighted: true,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Premium',
      price: 19999,
      description: 'Enterprise solution with complete customization',
      features: [
        'Unlimited Pages',
        'Custom Admin Panel',
        'Payment Gateway Integration',
        'Advanced Automation',
        'Mobile App Ready',
        'Priority 24/7 Support',
        'Advanced SEO',
        'Custom Features',
        'Lifetime Updates',
      ],
      highlighted: false,
      color: 'from-orange-500 to-red-500',
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleOrderNow = (planName) => {
    router.push(`/contact?plan=${planName}`);
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent <span className="gradient-text-premium">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business needs.
          </p>

          {/* Toggle Billing */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors ${
                isAnnual ? 'bg-gradient-to-r from-purple to-cyan' : 'bg-gray-700'
              }`}
            >
              <motion.span
                layout
                className="inline-block w-7 h-7 transform rounded-full bg-white"
                initial={false}
                animate={{ x: isAnnual ? 24 : 3 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`text-sm font-semibold ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted ? 'md:scale-105 md:z-10' : ''
              }`}
            >
              {/* Glow Effect */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              )}

              <div className={`relative p-8 bg-gradient-card border border-purple/20 hover:border-cyan/50 rounded-2xl h-full flex flex-col ${
                plan.highlighted ? 'bg-gradient-to-br from-purple/20 to-cyan/20 border-purple/50' : ''
              }`}>
                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-purple to-cyan text-white text-sm font-bold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'gradient-text-premium' : 'text-white'
                }`}>
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">
                    ₹{isAnnual ? Math.floor(plan.price * 12 * 0.85) : plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">/{isAnnual ? 'year' : 'month'}</span>
                  {isAnnual && (
                    <p className="text-xs text-cyan mt-2">Save 15% with annual billing</p>
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleOrderNow(plan.name)}
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple to-cyan text-white hover:shadow-premium'
                      : 'border-2 border-cyan text-cyan hover:bg-cyan/10'
                  }`}
                >
                  Order Now
                </motion.button>

                {/* Features List */}
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <motion.div
                      key={fIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: fIdx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <FaCheck className="text-cyan" size={16} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-xl bg-gradient-card border border-purple/20"
        >
          <p className="text-gray-300 mb-4">
            All plans include custom design, SSL certificate, regular updates, and technical support.
          </p>
          <p className="text-cyan font-semibold">
            Need a custom solution? Contact our team for enterprise pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
