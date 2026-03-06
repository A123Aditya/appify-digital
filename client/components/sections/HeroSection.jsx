'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-primary pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan/20 to-purple/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-10 w-96 h-96 bg-gradient-to-tr from-purple/20 to-cyan/20 rounded-full blur-3xl"
        />

        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,0,255,.05)_25%,rgba(255,0,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,0,255,.05)_75%,rgba(255,0,255,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,0,255,.05)_25%,rgba(255,0,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,0,255,.05)_75%,rgba(255,0,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block px-4 py-2 rounded-full bg-gradient-card border border-cyan/30 mb-8"
        >
          <span className="text-sm text-cyan">✨ Welcome to the Future of Web Development</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl leading-tight"
        >
          We Build <span className="gradient-text-premium">Stunning Websites</span> and <span className="gradient-text-premium">Powerful Apps</span> for Your Business
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl"
        >
          Transform your business with modern digital solutions. We specialize in website development, mobile apps, restaurant systems, salon bookings, e-commerce stores, and custom applications that drive real growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/portfolio')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple to-cyan text-white font-semibold hover:shadow-premium transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Demo Websites
            <FaArrowRight />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/contact')}
            className="px-8 py-4 rounded-full border-2 border-cyan text-cyan font-semibold hover:bg-cyan/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Contact Us
            <FaArrowRight />
          </motion.button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: '150+', label: 'Projects Delivered' },
            { number: '100+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-premium mb-2">
                {stat.number}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-cyan rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-cyan rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
