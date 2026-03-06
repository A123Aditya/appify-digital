'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PricingSection from '@/components/sections/PricingSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import CalculatorSection from '@/components/sections/CalculatorSection';

export default function PricingPage() {
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
              Transparent <span className="gradient-text-premium">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include support, hosting, and updates.
            </p>
          </motion.div>
        </div>
      </section>

      <PricingSection />
      <CalculatorSection />
      <NewsletterSection />
    </main>
  );
}
