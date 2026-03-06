'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import apiClient from '@/libs/api';

const StatsSection = () => {
  const [stats, setStats] = useState({
    visitors: 0,
    projects: 150,
    clients: 100,
    experience: 5,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await apiClient.get('/api/visitors');
        setStats({
          ...stats,
          visitors: response.data.count || 10000,
        });
      } catch (error) {
        console.log('Using default stats');
        setStats((prev) => ({
          ...prev,
          visitors: 10000,
        }));
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statsList = [
    {
      number: `${Math.floor(stats.visitors / 1000)}K+`,
      label: 'Visitors',
      icon: '👥',
    },
    {
      number: `${stats.projects}+`,
      label: 'Projects Delivered',
      icon: '🚀',
    },
    {
      number: `${stats.clients}+`,
      label: 'Happy Clients',
      icon: '😊',
    },
    {
      number: `${stats.experience}+`,
      label: 'Years Experience',
      icon: '⭐',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-primary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted by <span className="gradient-text-premium">Thousands of Businesses</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself. Join thousands of satisfied customers growing their business with Appify Digital.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-gradient-card border border-cyan/30 hover:border-cyan/50 transition-all duration-300 text-center h-full backdrop-blur-sm">
                {/* Icon */}
                <div className="text-5xl mb-4">{stat.icon}</div>

                {/* Number */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold gradient-text-premium mb-2"
                >
                  {!loading ? stat.number : '...'}
                </motion.h3>

                {/* Label */}
                <p className="text-gray-300 font-semibold text-sm md:text-base">
                  {stat.label}
                </p>

                {/* Animated underline */}
                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-purple to-cyan rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
