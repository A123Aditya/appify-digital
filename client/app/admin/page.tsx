'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaSignOutAlt, FaChartBar, FaUsers, FaEnvelope, FaShoppingCart } from 'react-icons/fa';
import apiClient from '@/libs/api';

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [dashboardData, setDashboardData] = useState({
    visitors: 0,
    contacts: 0,
    orders: 0,
    newsletter: 0,
  });
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState('overview');

  // Check if logged in
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsLoggedIn(true);
      fetchDashboardData();
    }
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [stats, contactsData] = await Promise.all([
        apiClient.get('/api/admin/stats'),
        apiClient.get('/api/admin/contacts'),
      ]);
      setDashboardData(stats.data);
      setContacts(contactsData.data);
    } catch (error) {
      console.error('Failed to fetch dashboard data');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await apiClient.post('/api/admin/login', loginData);
      localStorage.setItem('adminToken', response.data.token);
      setIsLoggedIn(true);
      fetchDashboardData();
      setLoginData({ email: '', password: '' });
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || 'Invalid credentials'));
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
    setView('overview');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-primary pt-32 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md rounded-2xl bg-gradient-card border border-purple/30 p-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2 text-center">
            Admin <span className="gradient-text-premium">Dashboard</span>
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Sign in to access your dashboard analytics
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
                placeholder="admin@appifydigital.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-purple/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition-colors"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-purple/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition-colors"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple to-cyan text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Sign In'}
            </motion.button>
          </form>

          <p className="text-gray-400 text-sm text-center mt-6">
            Demo credentials: admin@appifydigital.com / password123
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Dashboard <span className="gradient-text-premium">Analytics</span>
            </h1>
            <p className="text-gray-400">Welcome back! Here's your business overview.</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-500/20 text-red-400 rounded-lg border border-red-500/50 hover:bg-red-500/30 transition-all"
          >
            <FaSignOutAlt />
            Logout
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            {
              icon: FaUsers,
              label: 'Total Visitors',
              value: dashboardData.visitors,
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: FaEnvelope,
              label: 'Contact Submissions',
              value: dashboardData.contacts,
              color: 'from-purple-500 to-pink-500',
            },
            {
              icon: FaShoppingCart,
              label: 'Pricing Inquiries',
              value: dashboardData.orders,
              color: 'from-green-500 to-teal-500',
            },
            {
              icon: FaChartBar,
              label: 'Newsletter Subscribers',
              value: dashboardData.newsletter,
              color: 'from-orange-500 to-red-500',
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-gradient-card border border-purple/20 hover:border-cyan/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-gray-400 text-sm font-semibold mb-2">
                  {stat.label}
                </h3>
                <p className="text-3xl font-bold gradient-text-premium">
                  {stat.value}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-4 mb-8 flex-wrap"
        >
          {['overview', 'contacts', 'orders'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              onClick={() => setView(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all capitalize ${
                view === tab
                  ? 'bg-gradient-to-r from-purple to-cyan text-white'
                  : 'bg-gradient-card border border-purple/20 text-gray-300 hover:border-cyan/50'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Views */}
        {view === 'contacts' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl bg-gradient-card border border-purple/20 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recent Contacts</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300">
                <thead className="text-white border-b border-purple/20">
                  <tr>
                    <th className="pb-4">Name</th>
                    <th className="pb-4">Email</th>
                    <th className="pb-4">Phone</th>
                    <th className="pb-4">Business Type</th>
                    <th className="pb-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.length > 0 ? (
                    contacts.map((contact, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-purple/10 hover:bg-purple/5 transition-colors"
                      >
                        <td className="py-4">{contact.name}</td>
                        <td className="py-4">{contact.email}</td>
                        <td className="py-4">{contact.phone}</td>
                        <td className="py-4 capitalize">{contact.businessType}</td>
                        <td className="py-4">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-gray-400">
                        No contacts yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {view === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl bg-gradient-card border border-purple/20 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h2>
            <p className="text-gray-300">
              Welcome to your Appify Digital admin dashboard. This is where you can track your website's performance, manage inquiries, and monitor business metrics.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
