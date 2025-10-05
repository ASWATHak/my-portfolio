'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuantumStore } from '@/systems/state/quantum';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavNode {
  id: string;
  label: string;
  href: string;
  color: string;
}

const navNodes: NavNode[] = [
  { id: 'home', label: 'Home', href: '/', color: '#00D4FF' },
  { id: 'about', label: 'About', href: '/about', color: '#8A2BE2' },
  { id: 'projects', label: 'Projects', href: '#', color: '#FF6B35' },
  { id: 'contact', label: 'Contact', href: '/contact', color: '#4ADE80' },
];

export default function SynapticNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const { setInteracting } = useQuantumStore();

  const activeNode = navNodes.find(node => node.href === pathname)?.id || 'home';

  return (
    <>
      {/* Neural Toggle Button */}
      <motion.button
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-black/50 border border-cyan-400/50 rounded-full backdrop-blur-md"
        onClick={() => {
          setIsExpanded(!isExpanded);
          setInteracting(true);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            className="w-6 h-6 border-2 border-cyan-400 rounded-full"
            animate={{
              scale: isExpanded ? [1, 1.2, 1] : 1,
              rotate: isExpanded ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mt-1"
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 1.5, 1],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.button>

      {/* Neural Navigation Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <div className="absolute inset-0 overflow-hidden">
              {/* Neural Grid Background */}
              <div className="absolute inset-0 opacity-20">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(255, 107, 53, 0.3) 0%, transparent 50%)
                    `
                  }}
                />
              </div>

              {/* Navigation Nodes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-96">
                  {navNodes.map((node, index) => {
                    const angle = (index / navNodes.length) * Math.PI * 2 - Math.PI / 2;
                    const radius = 120;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const isActive = activeNode === node.id;

                    return (
                      <motion.div
                        key={node.id}
                        className="absolute"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link href={node.href} onClick={() => setIsExpanded(false)}>
                          <motion.div
                            className={`relative p-4 rounded-full border-2 backdrop-blur-md cursor-pointer ${
                              isActive 
                                ? 'bg-white/20 border-white' 
                                : 'bg-black/50 border-gray-600 hover:border-gray-400'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                              borderColor: isActive ? node.color : undefined,
                              boxShadow: isActive ? `0 0 20px ${node.color}50` : undefined
                            }}
                          >
                            {/* Neural pulse effect */}
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 opacity-50"
                                style={{ borderColor: node.color }}
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.5, 0, 0.5],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            )}
                            
                            <div className="text-center">
                              <div 
                                className="w-4 h-4 rounded-full mx-auto mb-2"
                                style={{ backgroundColor: node.color }}
                              />
                              <span className="text-white text-sm font-mono">
                                {node.label}
                              </span>
                            </div>
                          </motion.div>
                        </Link>

                        {/* Connection lines to center */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r opacity-30"
                          style={{
                            background: `linear-gradient(${angle + Math.PI/2}rad, ${node.color}40, transparent)`,
                            width: `${radius}px`,
                            height: '2px',
                            transformOrigin: '0 0',
                            transform: `translate(-50%, -50%) rotate(${angle + Math.PI}rad)`
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        />
                      </motion.div>
                    );
                  })}

                  {/* Center hub */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="w-12 h-12 bg-black/70 border-2 border-cyan-400 rounded-full backdrop-blur-md flex items-center justify-center">
                      <motion.div
                        className="w-6 h-6 bg-cyan-400 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
