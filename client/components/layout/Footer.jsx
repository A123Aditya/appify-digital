'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Demo Websites', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/8877403146', color: '#25D366' },
    { icon: FaInstagram, href: 'https://instagram.com', color: '#E1306C' },
    { icon: FaFacebook, href: 'https://facebook.com', color: '#1877F2' },
    { icon: FaLinkedin, href: 'https://linkedin.com', color: '#0A66C2' },
  ];

  return (
    <footer className="bg-gradient-to-b from-darkBg to-black border-t border-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text-premium mb-4">
              Appify Digital
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building stunning websites and powerful apps that drive business growth.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-cyan transition-colors duration-300"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-cyan transition-colors duration-300"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-cyan transition-colors duration-300"
                >
                  E-commerce
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-gradient-card flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon className="text-white" size={20} />
                  </motion.a>
                );
              })}
            </div>
            <a
              href="mailto:contact@appifydigital.com"
              className="text-cyan hover:text-purpleLight transition-colors duration-300"
            >
              contact@appifydigital.com
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple/20 pt-8 mt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Appify Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
