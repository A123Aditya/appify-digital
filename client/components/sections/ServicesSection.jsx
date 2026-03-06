'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGlobe,
  FaMobileAlt,
  FaUtensils,
  FaSpa,
  FaShoppingCart,
  FaCubes,
  FaFileAlt,
} from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: FaGlobe,
      title: 'Website Development',
      description: 'Custom, responsive websites designed to convert visitors into customers.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaUtensils,
      title: 'Restaurant Websites',
      description: 'Complete solution with online menus, ordering, and reservation system.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FaSpa,
      title: 'Salon & Spa Bookings',
      description: 'Professional booking system with scheduling and payment integration.',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce Store',
      description: 'Full-featured online stores with payment gateway and inventory management.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: FaCubes,
      title: 'Custom Web Apps',
      description: 'Scalable applications tailored to your unique business requirements.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: FaFileAlt,
      title: 'Business Landing Pages',
      description: 'High-converting landing pages designed to maximize your ROI.',
      color: 'from-cyan-500 to-blue-500',
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

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan/50 to-transparent rounded-full blur-3xl" />
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
            Our <span className="gradient-text-premium">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Complete digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-gradient-card border border-purple/20 hover:border-cyan/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:shadow-lg transition-all duration-300`}>
                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                      <Icon className="text-2xl text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text-premium transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-6 flex items-center gap-2 text-cyan font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Learn more
                    <span>→</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
