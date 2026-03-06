'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NewsletterSection from '@/components/sections/NewsletterSection';

export default function AboutPage() {
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
              About <span className="gradient-text-premium">Appify Digital</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a team of passionate developers and designers dedicated to transforming businesses through digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-card border border-purple/20"
            >
              <h2 className="text-3xl font-bold gradient-text-premium mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To empower businesses of all sizes with cutting-edge digital solutions that drive growth, engagement, and customer satisfaction. We believe technology should be accessible, affordable, and transformative.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-card border border-purple/20"
            >
              <h2 className="text-3xl font-bold gradient-text-premium mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To become the most trusted digital agency in India, known for delivering exceptional results, innovative solutions, and outstanding customer service. We aim to help thousands of businesses succeed in the digital world.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Our <span className="gradient-text-premium">Core Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Quality',
                  desc: 'We never compromise on code quality, design, and user experience.',
                },
                {
                  title: 'Innovation',
                  desc: 'We stay updated with latest technologies and trends to deliver modern solutions.',
                },
                {
                  title: 'Integrity',
                  desc: 'We are transparent, honest, and committed to our clients\' success.',
                },
                {
                  title: 'Customer Focus',
                  desc: 'Your success is our success. We prioritize your needs and goals.',
                },
                {
                  title: 'Excellence',
                  desc: 'We strive for perfection in every project and interaction.',
                },
                {
                  title: 'Teamwork',
                  desc: 'We work collaboratively to create amazing results together.',
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-card border border-purple/20 text-center"
                >
                  <h3 className="text-xl font-bold text-cyan mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-card border border-cyan/30 rounded-2xl p-12 text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: '5+', label: 'Years in Business' },
                { num: '150+', label: 'Projects Completed' },
                { num: '100+', label: 'Satisfied Clients' },
                { num: '10K+', label: 'Website Visitors' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <h3 className="text-3xl font-bold gradient-text-premium mb-2">
                    {stat.num}
                  </h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
