'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuantumStore } from '@/systems/state/quantum';

interface NeuralTextProps {
  children: string;
  delay?: number;
}

function NeuralText({ children, delay = 0 }: NeuralTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);
  
  const scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const targetText = children;
  
  useEffect(() => {
    const startScramble = () => {
      setIsScrambling(true);
      let iterations = 0;
      const maxIterations = targetText.length * 2;
      
      const scrambleInterval = setInterval(() => {
        setDisplayText(() => {
          return targetText
            .split('')
            .map((char, index) => {
              if (index < iterations / 2) {
                return targetText[index];
              }
              return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            })
            .join('');
        });
        
        iterations++;
        
        if (iterations >= maxIterations) {
          clearInterval(scrambleInterval);
          setDisplayText(targetText);
          setIsScrambling(false);
        }
      }, 50);
    };
    
    const timeoutId = setTimeout(startScramble, delay);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [targetText, delay]);
  
  return (
    <span className={`font-mono ${isScrambling ? 'text-cyan-400' : 'text-white'}`}>
      {displayText}
    </span>
  );
}

export default function QuantumHero() {
  const { isTransitioning } = useQuantumStore();
  
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Quantum Grid */}
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Quantum Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: Math.sin(i) * 50,
                y: Math.cos(i) * 50,
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Holographic Effects */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 40%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 50% 80%, rgba(255, 107, 53, 0.2) 0%, transparent 60%)
              `
            }}
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Main Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <NeuralText delay={500}>ASWATH</NeuralText>
          </h1>
          <div className="text-2xl md:text-3xl text-cyan-400 font-mono">
            <NeuralText delay={1500}>Quantum Developer</NeuralText>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Architecting digital realities through{' '}
            <span className="text-purple-400">neural networks</span> and{' '}
            <span className="text-green-400">quantum algorithms</span>
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.button
            className="px-8 py-3 bg-cyan-400/20 border border-cyan-400 text-cyan-400 rounded-lg font-mono hover:bg-cyan-400/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Projects
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-transparent border border-gray-600 text-gray-300 rounded-lg font-mono hover:border-gray-400 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <motion.div
            className="w-3 h-3 bg-green-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-green-400 font-mono text-sm">
            QUANTUM_STATE: ACTIVE
          </span>
        </motion.div>
      </div>

      {/* Transition Effect */}
      {isTransitioning && (
        <motion.div
          className="absolute inset-0 bg-black z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center h-full">
            <motion.div
              className="text-cyan-400 font-mono text-xl"
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              QUANTUM_TUNNELING...
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}