'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreenPremium = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) return prev;
        return prev + Math.random() * 35;
      });
    }, 250);

    // Trigger particle assembly at 0.5s
    const particleTimer = setTimeout(() => {
      setParticlesReady(true);
    }, 500);

    // Complete progress at 2.8s
    const completeTimer = setTimeout(() => {
      setProgress(100);
      clearInterval(progressInterval);
    }, 2800);

    // Exit splash at 4s
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(particleTimer);
      clearTimeout(completeTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // Individual animated particle
  const Particle = ({ delay, duration, x, y, size, targetX, targetY }) => (
    <motion.div
      className="absolute rounded-lg"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${
          Math.random() > 0.5
            ? 'rgba(74, 0, 224, 0.8)'
            : 'rgba(142, 45, 226, 0.8)'
        }, rgba(0, 198, 255, 0.3))`,
        boxShadow: `0 0 ${size * 0.5}px rgba(138, 43, 226, 0.6)`,
        left: x,
        top: y,
      }}
      initial={{
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.5,
      }}
      animate={
        particlesReady
          ? {
              x: targetX,
              y: targetY,
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.3],
            }
          : {
              x: 0,
              y: 0,
              opacity: 0.6,
              scale: 1,
            }
      }
      transition={{
        delay: delay,
        duration: particlesReady ? duration : 0,
        ease: 'easeInOut',
      }}
    />
  );

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0F2027] via-[#2C5364] to-[#4A00E0]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-[#8E2DE2] via-transparent to-[#00C6FF]"
          animate={{
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Particle Field - Assembles into Logo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Phone Icon Particles - Left side of screen center */}
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 120;
          const startX = Math.cos(angle) * radius * 3;
          const startY = Math.sin(angle) * radius * 3;
          const endX = Math.cos(angle) * radius * 0.3;
          const endY = Math.sin(angle) * radius * 0.3;

          return (
            <Particle
              key={`phone-${i}`}
              delay={i * 0.08}
              duration={1.2}
              x={`calc(50% - 60px + ${startX}px)`}
              y={`calc(50% - ${startY}px)`}
              size={Math.random() * 8 + 4}
              targetX={endX}
              targetY={endY}
            />
          );
        })}

        {/* Arrow Particles - Right side of screen center */}
        {[...Array(10)].map((_, i) => {
          const angle = (i / 10) * Math.PI * 2 + Math.PI;
          const radius = 100;
          const startX = Math.cos(angle) * radius * 2.5;
          const startY = Math.sin(angle) * radius * 2.5;
          const endX = Math.cos(angle) * radius * 0.4;
          const endY = Math.sin(angle) * radius * 0.4;

          return (
            <Particle
              key={`arrow-${i}`}
              delay={0.15 + i * 0.07}
              duration={1.2}
              x={`calc(50% + 60px + ${startX}px)`}
              y={`calc(50% - ${startY}px)`}
              size={Math.random() * 6 + 3}
              targetX={endX}
              targetY={endY}
            />
          );
        })}
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Main Logo Container */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0 }}
          animate={particlesReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.6,
          }}
        >
          {/* Background Glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple via-cyan to-purple blur-3xl -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: '200px',
              height: '200px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* Logo SVG */}
          <motion.div
            className="relative w-40 h-40 md:w-48 md:h-48"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              particlesReady
                ? {
                    scale: [0, 1.1, 1],
                    opacity: 1,
                  }
                : {
                    scale: 0,
                    opacity: 0,
                  }
            }
            transition={{
              delay: 1.2,
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <img
              src="/appify-logo.svg"
              alt="Appify Digital"
              className="w-full h-full drop-shadow-2xl"
            />
          </motion.div>

          {/* Inner Glow Circle */}
          <motion.div
            className="absolute inset-0 rounded-full border border-cyan/30"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              boxShadow: 'inset 0 0 30px rgba(0, 198, 255, 0.2)',
            }}
          />

          {/* Rotating Ring - Primary */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan border-r-purple"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Rotating Ring - Secondary */}
          <motion.div
            className="absolute inset-4 rounded-full border border-transparent border-b-purple/50 border-l-cyan/50"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>

        {/* Brand Text Container */}
        <motion.div
          className="flex items-baseline gap-1 mb-8"
          initial={{ opacity: 0 }}
          animate={particlesReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            delay: 2.0,
            duration: 0.4,
          }}
        >
          {/* "Appify" Text - Slides in from right with glow */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={
              particlesReady
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {
                    opacity: 0,
                    x: 100,
                  }
            }
            transition={{
              delay: 2.0,
              duration: 0.7,
              ease: 'easeOut',
            }}
            style={{
              background: 'linear-gradient(135deg, #4A00E0 0%, #8E2DE2 50%, #00C6FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.6))',
            }}
          >
            Appify
          </motion.h1>
        </motion.div>

        {/* "DIGITAL" Text - Fade in with blur effect */}
        <motion.div
          initial={{
            opacity: 0,
            filter: 'blur(10px)',
          }}
          animate={
            particlesReady
              ? {
                  opacity: 1,
                  filter: 'blur(0px)',
                }
              : {
                  opacity: 0,
                  filter: 'blur(10px)',
                }
          }
          transition={{
            delay: 2.4,
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="mb-12"
        >
          <p
            className="text-lg md:text-xl font-semibold tracking-widest"
            style={{
              background: 'linear-gradient(90deg, #00C6FF 0%, #8E2DE2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 8px rgba(0, 198, 255, 0.4))',
            }}
          >
            DIGITAL
          </p>
        </motion.div>

        {/* Tagline - Subtle entrance */}
        <motion.p
          className="text-gray-400 text-center px-4 mb-8 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={
            particlesReady
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 10 }
          }
          transition={{
            delay: 2.8,
            duration: 0.6,
          }}
        >
          Crafting Digital Excellence
        </motion.p>

        {/* Loading Indicator */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Progress Bar */}
          <motion.div
            className="w-64 bg-gray-700/20 h-1 rounded-full overflow-hidden border border-gray-600/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple via-cyan to-purple"
              style={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.3,
              }}
            />
          </motion.div>

          {/* Animated Dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple to-cyan"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  delay: dot * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          {/* Progress percentage */}
          <motion.p
            className="text-gray-500 text-xs"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {Math.round(progress)}%
          </motion.p>
        </motion.div>
      </div>

      {/* Light Reflections - Premium effect */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan/10 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [-100, 100, -100],
          y: [-100, 100, -100],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple/10 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [100, -100, 100],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

export default SplashScreenPremium;
