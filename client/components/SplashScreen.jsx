'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const SplashScreen = ({ onComplete }) => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 40;
      });
    }, 300);

    // Complete progress at 3 seconds
    const completeTimer = setTimeout(() => {
      setProgress(100);
      clearInterval(progressInterval);
    }, 2500);

    // Transition to home after splash completes
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // Floating particle component
  const Particle = ({ delay, duration, x, y, size }) => (
    <motion.div
      className="absolute rounded-lg"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, rgba(74, 0, 224, 0.3), rgba(142, 45, 226, 0.2))`,
        left: x,
        top: y,
      }}
      animate={{
        y: [0, -50, 0],
        x: [-10, 10, -10],
        opacity: [0, 0.6, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
      }}
    />
  );

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0F2027] via-[#2C5364] to-[#4A00E0]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-[#8E2DE2] via-transparent to-[#00C6FF]"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Particle
            key={i}
            delay={i * 0.3}
            duration={6 + i}
            x={`${Math.random() * 100}%`}
            y={`${Math.random() * 100}%`}
            size={Math.random() * 40 + 20}
          />
        ))}
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Logo Container */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          {/* Glow effect circle */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-cyan blur-2xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Main Logo */}
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 relative"
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src="/appify-logo.svg"
              alt="Appify Digital"
              className="w-full h-full drop-shadow-2xl"
            />
          </motion.div>

          {/* Rotating Arrow Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan border-r-purple"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Secondary rotating ring (offset) */}
          <motion.div
            className="absolute inset-4 rounded-full border border-transparent border-b-purple/50 border-l-cyan/50"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold gradient-text-premium mb-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Appify Digital
        </motion.h1>

        <motion.p
          className="text-gray-400 mb-12 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Crafting Digital Excellence
        </motion.p>

        {/* Loading Progress */}
        <motion.div
          className="w-64 bg-gray-700/30 h-1 rounded-full overflow-hidden border border-gray-600/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple to-cyan"
            style={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.3,
            }}
          />
        </motion.div>

        {/* Loading Dots */}
        <div className="flex gap-2 mt-6">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-purple to-cyan"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                delay: dot * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        {/* Progress text */}
        <motion.p
          className="text-gray-400 text-sm mt-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
