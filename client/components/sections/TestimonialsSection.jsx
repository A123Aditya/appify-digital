'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'The Golden Spoon Restaurant',
      rating: 5,
      text: 'Appify Digital transformed our restaurant with an amazing website and ordering system. We saw a 300% increase in online orders!',
      image: 'https://via.placeholder.com/60',
    },
    {
      name: 'Priya Singh',
      business: 'Bella Salon & Spa',
      rating: 5,
      text: 'Their salon booking system is game-changing. Customers love the easy scheduling, and we save hours on admin work.',
      image: 'https://via.placeholder.com/60',
    },
    {
      name: 'Amit Patel',
      business: 'TechStart Solutions',
      rating: 5,
      text: 'Professional, responsive, and affordable. They delivered our e-commerce store exactly as we envisioned it.',
      image: 'https://via.placeholder.com/60',
    },
    {
      name: 'Anjali Verma',
      business: 'Style Elite Boutique',
      rating: 5,
      text: 'Outstanding customer support and beautiful design. Our website converts visitors to customers consistently.',
      image: 'https://via.placeholder.com/60',
    },
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-darkBg overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-purple/50 rounded-full blur-3xl" />
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
            What Our <span className="gradient-text-premium">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied businesses growing with our solutions.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-72 rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-8 bg-gradient-card border border-purple/30 rounded-2xl flex flex-col justify-center"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl text-white mb-6 italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple to-cyan flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonials[current].name}
                    </p>
                    <p className="text-cyan text-sm">
                      {testimonials[current].business}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple to-cyan flex items-center justify-center text-white hover:shadow-lg transition-shadow"
            >
              <FaChevronLeft />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === current ? 'w-8 bg-cyan' : 'w-2 bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan to-purple flex items-center justify-center text-white hover:shadow-lg transition-shadow"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
