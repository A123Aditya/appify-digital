'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaRobot } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! 👋 How can we help you build your online presence today?' }
  ]);
  const [input, setInput] = useState('');

  const botResponses = {
    website: 'We offer custom website development starting at ₹4,999. Our team creates beautiful, responsive websites that convert visitors to customers!',
    app: 'We build high-quality mobile apps for iOS and Android. Perfect for restaurants, salons, e-commerce, and more!',
    pricing: 'We have three main plans: Starter (₹4,999), Business (₹9,999), and Premium (₹19,999). Check our pricing page for details!',
    restaurant: 'Perfect! We specialize in restaurant websites with online menu systems, ordering, and reservation features.',
    salon: 'Great choice! Our salon & spa booking systems include real-time scheduling, customer management, and payment integration.',
    contact: 'You can contact us via WhatsApp, email, or fill our contact form. Our team responds within 24 hours!',
    default: 'That\'s interesting! Our team can help you with custom web solutions. Would you like to schedule a consultation?'
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    if (message.includes('website')) return botResponses.website;
    if (message.includes('app')) return botResponses.app;
    if (message.includes('price') || message.includes('cost')) return botResponses.pricing;
    if (message.includes('restaurant')) return botResponses.restaurant;
    if (message.includes('salon') || message.includes('spa')) return botResponses.salon;
    if (message.includes('contact')) return botResponses.contact;
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages([...newMessages, { type: 'bot', text: botResponse }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-24 right-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-96 h-96 bg-darkBg border border-purple/30 rounded-lg shadow-premium flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple to-cyan p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaRobot className="text-white" />
                <span className="text-white font-semibold">Appify Bot</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:scale-110 transition-transform"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-purple to-cyan text-white'
                        : 'bg-gray-800 text-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-purple/30 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 bg-gray-900 border border-purple/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-gradient-to-r from-purple to-cyan text-white rounded-lg hover:shadow-lg transition-shadow"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-r from-purple to-cyan rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
      >
        <FaRobot size={24} />
      </motion.button>
    </div>
  );
};

export default Chatbot;
