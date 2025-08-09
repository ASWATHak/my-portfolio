'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/aswath', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/aswath', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/aswath', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@aswath.dev', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="text-sm">
              © {new Date().getFullYear()} Aswath. Built with Next.js, TypeScript & Tailwind CSS.
            </p>
            <p className="text-xs mt-1">
              Phase 1 Foundation • AI Integration Coming in Phase 2
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}