'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to manage splash screen visibility
 * Shows splash screen only on first page load
 * Stores state in sessionStorage to persist across navigation in same session
 */
export const useSplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if splash has already been shown in this session
    const splashShown = sessionStorage.getItem('splashScreenShown');

    if (splashShown) {
      setShowSplash(false);
    } else {
      // Mark splash as shown for this session
      sessionStorage.setItem('splashScreenShown', 'true');
    }
  }, []);

  const completeSplash = () => {
    setShowSplash(false);
  };

  // Always return the state (mounted doesn't affect the return)
  return {
    showSplash,
    completeSplash,
  };
};
