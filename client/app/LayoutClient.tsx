'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreenPremium from '@/components/SplashScreenPremium';
import { useSplashScreen } from '@/libs/useSplashScreen';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import Chatbot from '@/components/common/Chatbot';

export default function LayoutClient({ children }) {
  const { showSplash, completeSplash } = useSplashScreen();

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreenPremium key="splash" onComplete={completeSplash} />
        )}
      </AnimatePresence>

      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </>
  );
}
