'use client';

import React from 'react';
import { motion } from 'framer-motion';
import DemoWebsitesSection from '@/components/sections/DemoWebsitesSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

export default function PortfolioPage() {
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
              Our <span className="gradient-text-premium">Demo Websites</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore real-world examples of our work across different industries and business types.
            </p>
          </motion.div>
        </div>
      </section>

      <DemoWebsitesSection />
      <NewsletterSection />
    </main>
  );
}
