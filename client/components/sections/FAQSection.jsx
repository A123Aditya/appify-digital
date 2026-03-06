'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Typically, a website takes 4-8 weeks depending on complexity. Our Starter plans are usually completed faster than custom solutions.',
    },
    {
      question: 'Do you provide hosting and domain?',
      answer: 'Yes! All our plans include hosting and domain registration for the first year. We handle all the technical details for you.',
    },
    {
      question: 'Can you integrate payment gateways?',
      answer: 'Absolutely! We integrate with Razorpay, PayPal, Stripe, and other payment methods based on your needs.',
    },
    {
      question: 'What about SEO optimization?',
      answer: 'SEO optimization is included in all our plans. We ensure proper on-page SEO, meta tags, sitemaps, and mobile optimization.',
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes! We offer ongoing support, maintenance, and updates. All plans include email support, Premium plans get 24/7 priority support.',
    },
    {
      question: 'Can I request custom features?',
      answer: 'Of course! We can build custom features tailored to your business needs. Contact our team to discuss your requirements.',
    },
    {
      question: 'What if I need to make changes later?',
      answer: 'Easy! We provide a simple admin dashboard where you can update content, products, and other information yourself.',
    },
    {
      question: 'Do you provide mobile app development?',
      answer: 'Yes! We develop native and cross-platform mobile apps for iOS and Android. Contact us for app development quotes.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-cyan/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text-premium">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about our services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="rounded-xl bg-gradient-card border border-purple/20 hover:border-cyan/50 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-6 py-6 flex items-center justify-between hover:bg-purple/10 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === idx ? 45 : 0 }}
                  className="flex-shrink-0 ml-4"
                >
                  {activeIndex === idx ? (
                    <FaMinus className="text-cyan" size={18} />
                  ) : (
                    <FaPlus className="text-cyan" size={18} />
                  )}
                </motion.div>
              </button>

              {/* Answer */}
              {activeIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6 border-t border-purple/20"
                >
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-xl bg-gradient-card border border-purple/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Our team is ready to help! Contact us directly for personalized assistance.
          </p>
          <motion.a
            href="https://wa.me/8877403146"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple to-cyan text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Chat with us on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
