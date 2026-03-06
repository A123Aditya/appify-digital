'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NewsletterSection from '@/components/sections/NewsletterSection';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Top Web Design Trends in 2024',
      excerpt: 'Discover the latest web design trends that are shaping the digital landscape.',
      date: 'March 5, 2024',
      author: 'Appify Team',
      category: 'Design',
    },
    {
      title: '10 Reasons Your Restaurant Needs a Website',
      excerpt: 'Learn why a professional website is essential for restaurant growth and customer engagement.',
      date: 'March 3, 2024',
      author: 'Appify Team',
      category: 'Business',
    },
    {
      title: 'Mobile App Development Best Practices',
      excerpt: 'A comprehensive guide to building high-quality mobile applications.',
      date: 'February 28, 2024',
      author: 'Appify Team',
      category: 'Development',
    },
    {
      title: 'SEO Optimization Guide for Beginners',
      excerpt: 'Everything you need to know about search engine optimization for your business.',
      date: 'February 25, 2024',
      author: 'Appify Team',
      category: 'SEO',
    },
    {
      title: 'E-commerce Conversion Rate Optimization',
      excerpt: 'Proven strategies to increase your online store sales and customer conversion.',
      date: 'February 20, 2024',
      author: 'Appify Team',
      category: 'E-commerce',
    },
    {
      title: 'How to Choose the Right Web Hosting',
      excerpt: 'A guide to selecting the best hosting provider for your website needs.',
      date: 'February 15, 2024',
      author: 'Appify Team',
      category: 'Hosting',
    },
  ];

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
              Our <span className="gradient-text-premium">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest web design trends, development tips, and digital marketing insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-xl bg-gradient-card border border-purple/20 hover:border-cyan/50 transition-all p-6 cursor-pointer"
              >
                {/* Category */}
                <span className="inline-block px-3 py-1 rounded-full bg-purple/20 text-cyan text-xs font-semibold mb-3">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text-premium transition-all">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex justify-between items-center text-xs text-gray-400 border-t border-purple/20 pt-4">
                  <span>{post.date}</span>
                  <span>by {post.author}</span>
                </div>

                {/* Read More */}
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="text-cyan text-sm font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Read more →
                </motion.p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
