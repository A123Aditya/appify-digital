'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '@/components/sections/ServicesSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

export default function ServicesPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-primary pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="gradient-text-premium">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. From website development to custom applications.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection />

      {/* Detailed Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {[
              {
                title: 'Website Development',
                desc: 'Custom websites built with latest technologies, optimized for speed and SEO.',
              },
              {
                title: 'Mobile Apps',
                desc: 'Native iOS and Android apps with intuitive UI and powerful features.',
              },
              {
                title: 'E-commerce Solutions',
                desc: 'Complete online stores with payment integration and inventory management.',
              },
              {
                title: 'Booking Systems',
                desc: 'Professional scheduling systems for salons, spas, and service businesses.',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-card border border-purple/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
