'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className = '', hover = true, onClick }: CardProps) {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;

  return (
    <motion.div
      className={classes}
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      layout
    >
      {children}
    </motion.div>
  );
}