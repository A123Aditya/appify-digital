'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const DemoWebsitesSection = () => {
  const router = useRouter();

  const demoSites = [
    {
      title: 'Restaurant Website Demo',
      description: 'Complete restaurant solution with online menu, ordering, and reservations.',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop',
      link: 'https://example-restaurant.com',
    },
    {
      title: 'Salon Booking System',
      description: 'Professional booking system with real-time availability and customer management.',
      image: 'https://images.unsplash.com/photo-1631293278914-586cb221d7f7?w=500&h=400&fit=crop',
      link: 'https://example-salon.com',
    },
    {
      title: 'Spa Website Demo',
      description: 'Elegant spa website with service catalog, pricing, and online booking.',
      image: 'https://images.unsplash.com/photo-1544161515-81aae3ff8d23?w=500&h=400&fit=crop',
      link: 'https://example-spa.com',
    },
    {
      title: 'Business Portfolio',
      description: 'Professional portfolio showcasing services, team, and client testimonials.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
      link: 'https://example-portfolio.com',
    },
    {
      title: 'E-commerce Store Demo',
      description: 'Feature-rich online store with product catalog, cart, and payment gateway.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=400&fit=crop',
      link: 'https://example-ecommerce.com',
    },
    {
      title: 'Software Startup Site',
      description: 'Modern SaaS website with pricing, features, and customer testimonials.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e9d859ec?w=500&h=400&fit=crop',
      link: 'https://example-saas.com',
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-darkBg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-cyan/50 rounded-full blur-3xl" />
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
            Explore <span className="gradient-text-premium">Demo Websites</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See real-world examples of our work across different industries.
          </p>
        </motion.div>

        {/* Demo Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {demoSites.map((site, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden bg-gradient-card border border-purple/20 hover:border-cyan/50 transition-all duration-300 h-full flex flex-col">
                {/* Image Preview */}
                <div className="h-48 relative overflow-hidden bg-gray-800">
                  <img
                    src={site.image}
                    alt={site.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(site.link, '_blank')}
                      className="px-6 py-3 bg-gradient-to-r from-purple to-cyan text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
                    >
                      View Live Demo
                      <FaExternalLinkAlt size={16} />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text-premium transition-all">
                    {site.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {site.description}
                  </p>
                  <motion.a
                    href={site.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-cyan hover:text-purpleLight transition-colors mt-auto flex items-center gap-2 text-sm font-semibold"
                  >
                    Explore Site
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DemoWebsitesSection;
