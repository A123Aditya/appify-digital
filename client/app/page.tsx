'use client';

import React, { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import DemoWebsitesSection from '@/components/sections/DemoWebsitesSection';
import StatsSection from '@/components/sections/StatsSection';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import FAQSection from '@/components/sections/FAQSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import ContactSection from '@/components/sections/ContactSection';
import apiClient from '@/libs/api';

export default function Home() {
  useEffect(() => {
    // Track visitor
    const trackVisitor = async () => {
      try {
        await apiClient.post('/api/visitors');
      } catch (error) {
        console.log('Visitor tracking failed');
      }
    };

    trackVisitor();
  }, []);

  return (
    <main className="w-full">
      <HeroSection />
      <ServicesSection />
      <DemoWebsitesSection />
      <StatsSection />
      <PricingSection />
      <TestimonialsSection />
      <CalculatorSection />
      <FAQSection />
      <NewsletterSection />
      <ContactSection />
    </main>
  );
}
