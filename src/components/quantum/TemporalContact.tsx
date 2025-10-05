'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function TemporalContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(138, 43, 226, 0.2) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 py-16 flex flex-col items-center justify-center">
        <motion.div
          className="text-center mb-16 w-full"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Contact
          </h1>
          <p className="text-xl text-gray-400">
            Let&apos;s build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Contact Form */}
          <motion.div
            className="relative p-8 bg-black/50 border border-gray-600/50 rounded-lg backdrop-blur-md flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-2xl font-mono text-cyan-400 mb-6 text-center">
              Send Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div>
                <label className="block text-gray-300 font-mono text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-900/50 border border-gray-600 rounded text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 font-mono text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-900/50 border border-gray-600 rounded text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 font-mono text-sm mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-3 bg-gray-900/50 border border-gray-600 rounded text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full p-3 bg-cyan-400/20 border border-cyan-400 text-cyan-400 rounded font-mono hover:bg-cyan-400/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8 flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative p-8 bg-black/50 border border-gray-600/50 rounded-lg backdrop-blur-md w-full">
              <h3 className="text-2xl font-mono text-purple-400 mb-6 text-center">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-400 mr-4" />
                  <span className="text-white">contact@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-400 mr-4" />
                  <span className="text-white">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mr-4" />
                  <span className="text-white">San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="relative p-8 bg-black/50 border border-gray-600/50 rounded-lg backdrop-blur-md w-full">
              <h3 className="text-2xl font-mono text-green-400 mb-6 text-center">
                Social Links
              </h3>
              <div className="flex gap-4 justify-center">
                <a href="#" className="p-3 border border-gray-600 rounded hover:border-green-400 transition-colors">
                  <Github className="w-5 h-5 text-green-400" />
                </a>
                <a href="#" className="p-3 border border-gray-600 rounded hover:border-green-400 transition-colors">
                  <Linkedin className="w-5 h-5 text-green-400" />
                </a>
                <a href="#" className="p-3 border border-gray-600 rounded hover:border-green-400 transition-colors">
                  <Twitter className="w-5 h-5 text-green-400" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}