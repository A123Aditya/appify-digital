'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Demo Websites', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const whatsappLink = `https://wa.me/8877403146?text=${encodeURIComponent('Hello, I want to build a website for my business.')}`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-darkBg/80 backdrop-blur-md border-b border-purple/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <img
                src="/appify-logo.png"
                alt="Appify Digital Logo"
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold hidden sm:inline gradient-text-premium">
                Appify Digital
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-cyan transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple to-cyan group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors"
            >
              <FaWhatsapp size={18} />
              <span className="hidden lg:inline text-sm">WhatsApp</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact')}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple to-cyan text-white font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Your Website Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-purple/20 pb-4"
          >
            <div className="flex flex-col gap-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan transition-colors px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-2 pt-4 border-t border-purple/20">
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    router.push('/contact');
                    setIsOpen(false);
                  }}
                  className="flex-1 px-4 py-2 rounded-full bg-gradient-to-r from-purple to-cyan text-white font-semibold"
                >
                  Get Website
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
